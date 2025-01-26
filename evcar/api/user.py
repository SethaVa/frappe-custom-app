import frappe
from frappe.utils import random_string
from frappe.model.document import Document
from frappe.exceptions import ValidationError

@frappe.whitelist()
def register_user_and_customer():
    email = frappe.form_dict.get("email")
    password = frappe.form_dict.get("password")
    first_name = frappe.form_dict.get("first_name")
    last_name = frappe.form_dict.get("last_name")
    customer_group="Individual"
    
    print("it is call")
    if not email or not password:
      raise ValidationError("Email and password are required")

    # Check if user already exists
    if frappe.db.exists("User", email):
      raise ValidationError(f"User with email {email} already exists")

    
    # Create a new User document
    user = frappe.get_doc({
        "doctype": "User",
        "email": email,
        "first_name": first_name,
        "last_name": last_name,
        "new_password": password,
        "enabled": 1,
    })
    
    # Insert the user into the database
    user.insert(ignore_permissions=True)


    # Create a corresponding Customer record
    customer = frappe.get_doc({
        "doctype": "Customer",
        "customer_name": f"{first_name} {last_name}" if last_name else first_name,
        "email_id": email,
        "customer_group": customer_group,
        "territory": "All Territories",
        "user": user.name 
    })

    # Insert the customer record into the database
    customer.insert(ignore_permissions=True)

    return {
        "user_email": user.email,
        "user_full_name": user.full_name,
        "customer_name": customer.customer_name,
        "customer_email": customer.email_id
    }