import frappe
import stripe

stripe.api_key = "sk_test_51OI9m0Hsp0B3Hu8Hnwos4l4hcKM5VOcwaONsW2lcKSxAWuFdmoKXmSWktLjieoXkJDwojALl8VEuwkDSDDo59fRd0096qPk436"
@frappe.whitelist()
def create_payment_intent(amount, currency="usd"):
    try:
        # Create a Payment Intent
        intent = stripe.PaymentIntent.create(
            amount=int(float(amount) * 100),
            currency=currency,
            payment_method_types=["card"],
        )
        # frappe.get_doc({
        #     "doctype": "Sales Transaction",
        #     "amount": amount,
        #     "currency": currency,
        #     "payment_intent_id": intent.id,
        #     "status": "Pending",
        # }).insert(ignore_permissions=True)

        # frappe.db.commit()

        return {"client_secret": intent.client_secret}
    except Exception as e:
        frappe.log_error(message=str(e), title="Stripe Payment Error")
        return {"error": str(e)}

def update_stock(name, quantity):
    """
    Update stock ledger with a new transaction.
    """
    # Check current stock
    item = frappe.get_doc("Item", name)
    if item.stock_quantity + quantity < 0:
        frappe.throw(_("Insufficient stock for item: {0}").format(name))

    # Update stock
    item.stock_quantity += quantity
    item.save()

    # Create a stock ledger entry
    stock_ledger_entry = frappe.get_doc({
        "doctype": "Stock Ledger",
        "name": name,
        "quantity": quantity,
        "transaction_type": "Sale" if quantity < 0 else "Purchase",
    })
    stock_ledger_entry.insert(ignore_permissions=True)


@frappe.whitelist()
def checkout_with_stripe():
    try:
        cart_items = frappe.form_dict.get("cart_items")
        customer = frappe.form_dict.get("customer")
        payment_method = frappe.form_dict.get("payment_method")
        delivery_date = frappe.form_dict.get("delivery_date")

        if isinstance(cart_items, str):
            cart_items = frappe.parse_json(cart_items)

        if not cart_items or not customer or not payment_method:
            frappe.throw("Cart items, customer, and payment method are required.")

        total_amount = sum(item["valuation_rate"] * item["quantity"] for item in cart_items)

        # Step 1: Create a Payment Intent on Stripe
        payment_intent = stripe.PaymentIntent.create(
            amount=int(total_amount * 100),  # Stripe uses cents
            currency="usd",  # Change currency if needed
            payment_method_types=["card"],
            description=f"Payment for order by customer {customer}",
        )

        # Step 2: Create a Sales Order in Frappe
        sales_order = frappe.get_doc({
            "doctype": "Sales Order",
            "customer": customer,
            "delivery_date": delivery_date,
            "status": "To Deliver and Bill",
            "items": [
                {
                    "item_code": item["name"],
                    "item_name": item["item_name"],
                    "qty": item["quantity"],
                    "rate": item["valuation_rate"]
                }
                for item in cart_items
            ],
            "total": total_amount
        })

        sales_order.insert()
        
        try:
          sales_order.submit()
        except Exception as e:
            frappe.log_error(message=str(e), title="Sales Order Submission Error")

        # Step 3: Return Payment Intent Client Secret for Frontend to Confirm Payment
        return {
            "status": "success",
            "message": "Order created. Proceed to payment.",
            # "sales_order": sales_order.name,
            "payment_intent_client_secret": payment_intent["client_secret"],
        }

    except stripe.error.StripeError as e:
        frappe.log_error(frappe.get_traceback(), "Stripe Checkout Error")
        return {
            "status": "error",
            "message": f"Stripe error: {e.user_message}",
        }
    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Checkout Error")
        return {
            "status": "error",
            "message": f"An error occurred: {str(e)}",
        }