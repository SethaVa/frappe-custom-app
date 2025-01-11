import { SalesOrderItem } from './SalesOrderItem'
import { SalesTaxesandCharges } from '../Accounts/SalesTaxesandCharges'
import { PackedItem } from '../Stock/PackedItem'
import { PricingRuleDetail } from '../Accounts/PricingRuleDetail'
import { PaymentSchedule } from '../Accounts/PaymentSchedule'
import { SalesTeam } from './SalesTeam'

export interface SalesOrder{
	name: string
	creation: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Title : Data	*/
	title?: string
	/**	Series : Select	*/
	naming_series: "SAL-ORD-.YYYY.-"
	/**	Customer : Link - Customer	*/
	customer: string
	/**	Customer Name : Data	*/
	customer_name?: string
	/**	Tax Id : Data	*/
	tax_id?: string
	/**	Order Type : Select	*/
	order_type: "" | "Sales" | "Maintenance" | "Shopping Cart"
	/**	Date : Date	*/
	transaction_date: string
	/**	Delivery Date : Date	*/
	delivery_date?: string
	/**	Customer's Purchase Order : Data	*/
	po_no?: string
	/**	Customer's Purchase Order Date : Date	*/
	po_date?: string
	/**	Company : Link - Company	*/
	company: string
	/**	Skip Delivery Note : Check	*/
	skip_delivery_note?: 0 | 1
	/**	Amended From : Link - Sales Order	*/
	amended_from?: string
	/**	Cost Center : Link - Cost Center	*/
	cost_center?: string
	/**	Project : Link - Project	*/
	project?: string
	/**	Currency : Link - Currency	*/
	currency: string
	/**	Exchange Rate : Float - Rate at which customer's currency is converted to company's base currency	*/
	conversion_rate: number
	/**	Price List : Link - Price List	*/
	selling_price_list: string
	/**	Price List Currency : Link - Currency	*/
	price_list_currency: string
	/**	Price List Exchange Rate : Float - Rate at which Price list currency is converted to company's base currency	*/
	plc_conversion_rate: number
	/**	Ignore Pricing Rule : Check	*/
	ignore_pricing_rule?: 0 | 1
	/**	Scan Barcode : Data	*/
	scan_barcode?: string
	/**	Set Source Warehouse : Link - Warehouse	*/
	set_warehouse?: string
	/**	Reserve Stock : Check - If checked, Stock will be reserved on <b>Submit</b>	*/
	reserve_stock?: 0 | 1
	/**	Items : Table - Sales Order Item	*/
	items: SalesOrderItem[]
	/**	Total Quantity : Float	*/
	total_qty?: number
	/**	Total Net Weight : Float	*/
	total_net_weight?: number
	/**	Total (Company Currency) : Currency	*/
	base_total?: number
	/**	Net Total (Company Currency) : Currency	*/
	base_net_total?: number
	/**	Total : Currency	*/
	total?: number
	/**	Net Total : Currency	*/
	net_total?: number
	/**	Tax Category : Link - Tax Category	*/
	tax_category?: string
	/**	Sales Taxes and Charges Template : Link - Sales Taxes and Charges Template	*/
	taxes_and_charges?: string
	/**	Shipping Rule : Link - Shipping Rule	*/
	shipping_rule?: string
	/**	Incoterm : Link - Incoterm	*/
	incoterm?: string
	/**	Named Place : Data	*/
	named_place?: string
	/**	Sales Taxes and Charges : Table - Sales Taxes and Charges	*/
	taxes?: SalesTaxesandCharges[]
	/**	Total Taxes and Charges (Company Currency) : Currency	*/
	base_total_taxes_and_charges?: number
	/**	Total Taxes and Charges : Currency	*/
	total_taxes_and_charges?: number
	/**	Grand Total (Company Currency) : Currency	*/
	base_grand_total?: number
	/**	Rounding Adjustment (Company Currency) : Currency	*/
	base_rounding_adjustment?: number
	/**	Rounded Total (Company Currency) : Currency	*/
	base_rounded_total?: number
	/**	In Words (Company Currency) : Data - In Words will be visible once you save the Sales Order.	*/
	base_in_words?: string
	/**	Grand Total : Currency	*/
	grand_total?: number
	/**	Rounding Adjustment : Currency	*/
	rounding_adjustment?: number
	/**	Rounded Total : Currency	*/
	rounded_total?: number
	/**	In Words : Data	*/
	in_words?: string
	/**	Advance Paid : Currency	*/
	advance_paid?: number
	/**	Disable Rounded Total : Check	*/
	disable_rounded_total?: 0 | 1
	/**	Apply Additional Discount On : Select	*/
	apply_discount_on?: "" | "Grand Total" | "Net Total"
	/**	Additional Discount Amount (Company Currency) : Currency	*/
	base_discount_amount?: number
	/**	Coupon Code : Link - Coupon Code	*/
	coupon_code?: string
	/**	Additional Discount Percentage : Float	*/
	additional_discount_percentage?: number
	/**	Additional Discount Amount : Currency	*/
	discount_amount?: number
	/**	Taxes and Charges Calculation : Text Editor	*/
	other_charges_calculation?: string
	/**	Packed Items : Table - Packed Item	*/
	packed_items?: PackedItem[]
	/**	Pricing Rule Detail : Table - Pricing Rule Detail	*/
	pricing_rules?: PricingRuleDetail[]
	/**	Customer Address : Link - Address	*/
	customer_address?: string
	/**	Address : Small Text	*/
	address_display?: string
	/**	Customer Group : Link - Customer Group	*/
	customer_group?: string
	/**	Territory : Link - Territory	*/
	territory?: string
	/**	Contact Person : Link - Contact	*/
	contact_person?: string
	/**	Contact : Small Text	*/
	contact_display?: string
	/**	Phone : Data	*/
	contact_phone?: string
	/**	Mobile No : Small Text	*/
	contact_mobile?: string
	/**	Contact Email : Data	*/
	contact_email?: string
	/**	Shipping Address Name : Link - Address	*/
	shipping_address_name?: string
	/**	Shipping Address : Small Text	*/
	shipping_address?: string
	/**	Dispatch Address Name : Link - Address	*/
	dispatch_address_name?: string
	/**	Dispatch Address : Small Text	*/
	dispatch_address?: string
	/**	Company Address Name : Link - Address	*/
	company_address?: string
	/**	Company Address : Small Text	*/
	company_address_display?: string
	/**	Payment Terms Template : Link - Payment Terms Template	*/
	payment_terms_template?: string
	/**	Payment Schedule : Table - Payment Schedule	*/
	payment_schedule?: PaymentSchedule[]
	/**	Terms : Link - Terms and Conditions	*/
	tc_name?: string
	/**	Terms and Conditions Details : Text Editor	*/
	terms?: string
	/**	Status : Select	*/
	status: "" | "Draft" | "On Hold" | "To Deliver and Bill" | "To Bill" | "To Deliver" | "Completed" | "Cancelled" | "Closed"
	/**	Delivery Status : Select	*/
	delivery_status?: "Not Delivered" | "Fully Delivered" | "Partly Delivered" | "Closed" | "Not Applicable"
	/**	%  Delivered : Percent - % of materials delivered against this Sales Order	*/
	per_delivered?: number
	/**	% Amount Billed : Percent - % of materials billed against this Sales Order	*/
	per_billed?: number
	/**	% Picked : Percent	*/
	per_picked?: number
	/**	Billing Status : Select	*/
	billing_status?: "Not Billed" | "Fully Billed" | "Partly Billed" | "Closed"
	/**	Sales Partner : Link - Sales Partner	*/
	sales_partner?: string
	/**	Amount Eligible for Commission : Currency	*/
	amount_eligible_for_commission?: number
	/**	Commission Rate : Float	*/
	commission_rate?: number
	/**	Total Commission : Currency	*/
	total_commission?: number
	/**	Sales Team : Table - Sales Team	*/
	sales_team?: SalesTeam[]
	/**	Loyalty Points : Int	*/
	loyalty_points?: number
	/**	Loyalty Amount : Currency	*/
	loyalty_amount?: number
	/**	From Date : Date	*/
	from_date?: string
	/**	To Date : Date	*/
	to_date?: string
	/**	Auto Repeat : Link - Auto Repeat	*/
	auto_repeat?: string
	/**	Letter Head : Link - Letter Head	*/
	letter_head?: string
	/**	Group same items : Check	*/
	group_same_items?: 0 | 1
	/**	Print Heading : Link - Print Heading	*/
	select_print_heading?: string
	/**	Print Language : Data	*/
	language?: string
	/**	Is Internal Customer : Check	*/
	is_internal_customer?: 0 | 1
	/**	Represents Company : Link - Company	*/
	represents_company?: string
	/**	Source : Link - Lead Source	*/
	source?: string
	/**	Inter Company Order Reference : Link - Purchase Order	*/
	inter_company_order_reference?: string
	/**	Campaign : Link - Campaign	*/
	campaign?: string
	/**	Party Account Currency : Link - Currency	*/
	party_account_currency?: string
}