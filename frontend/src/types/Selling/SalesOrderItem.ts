
export interface SalesOrderItem{
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
	/**	Item Code : Link - Item	*/
	item_code: string
	/**	Customer's Item Code : Data	*/
	customer_item_code?: string
	/**	Ensure Delivery Based on Produced Serial No : Check	*/
	ensure_delivery_based_on_produced_serial_no?: 0 | 1
	/**	Is Stock Item : Check	*/
	is_stock_item?: 0 | 1
	/**	Reserve Stock : Check	*/
	reserve_stock?: 0 | 1
	/**	Delivery Date : Date	*/
	delivery_date?: string
	/**	Item Name : Data	*/
	item_name: string
	/**	Description : Text Editor	*/
	description?: string
	/**	Item Group : Link - Item Group	*/
	item_group?: string
	/**	Brand Name : Link - Brand	*/
	brand?: string
	/**	Image : Attach	*/
	image?: string
	/**	Image View : Image	*/
	image_view?: string
	/**	Quantity : Float	*/
	qty: number
	/**	Stock UOM : Link - UOM	*/
	stock_uom?: string
	/**	UOM : Link - UOM	*/
	uom: string
	/**	UOM Conversion Factor : Float	*/
	conversion_factor: number
	/**	Qty as per Stock UOM : Float	*/
	stock_qty?: number
	/**	Stock Reserved Qty (in Stock UOM) : Float	*/
	stock_reserved_qty?: number
	/**	Price List Rate : Currency	*/
	price_list_rate?: number
	/**	Price List Rate (Company Currency) : Currency	*/
	base_price_list_rate?: number
	/**	Margin Type : Select	*/
	margin_type?: "" | "Percentage" | "Amount"
	/**	Margin Rate or Amount : Float	*/
	margin_rate_or_amount?: number
	/**	Rate With Margin : Currency	*/
	rate_with_margin?: number
	/**	Discount (%) on Price List Rate with Margin : Percent	*/
	discount_percentage?: number
	/**	Discount Amount : Currency	*/
	discount_amount?: number
	/**	Rate With Margin (Company Currency) : Currency	*/
	base_rate_with_margin?: number
	/**	Rate : Currency	*/
	rate?: number
	/**	Amount : Currency	*/
	amount?: number
	/**	Item Tax Template : Link - Item Tax Template	*/
	item_tax_template?: string
	/**	Basic Rate (Company Currency) : Currency	*/
	base_rate?: number
	/**	Amount (Company Currency) : Currency	*/
	base_amount?: number
	/**	Pricing Rules : Small Text	*/
	pricing_rules?: string
	/**	Rate of Stock UOM : Currency	*/
	stock_uom_rate?: number
	/**	Is Free Item : Check	*/
	is_free_item?: 0 | 1
	/**	Grant Commission : Check	*/
	grant_commission?: 0 | 1
	/**	Net Rate : Currency	*/
	net_rate?: number
	/**	Net Amount : Currency	*/
	net_amount?: number
	/**	Net Rate (Company Currency) : Currency	*/
	base_net_rate?: number
	/**	Net Amount (Company Currency) : Currency	*/
	base_net_amount?: number
	/**	Billed Amt : Currency	*/
	billed_amt?: number
	/**	Valuation Rate : Currency	*/
	valuation_rate?: number
	/**	Gross Profit : Currency	*/
	gross_profit?: number
	/**	Supplier delivers to Customer : Check	*/
	delivered_by_supplier?: 0 | 1
	/**	Supplier : Link - Supplier	*/
	supplier?: string
	/**	Weight Per Unit : Float	*/
	weight_per_unit?: number
	/**	Total Weight : Float	*/
	total_weight?: number
	/**	Weight UOM : Link - UOM	*/
	weight_uom?: string
	/**	Delivery Warehouse : Link - Warehouse	*/
	warehouse?: string
	/**	Customer Warehouse (Optional) : Link - Warehouse	*/
	target_warehouse?: string
	/**	Quotation : Link - Quotation	*/
	prevdoc_docname?: string
	/**	quotation_item : Data	*/
	quotation_item?: string
	/**	Against Blanket Order : Check	*/
	against_blanket_order?: 0 | 1
	/**	Blanket Order : Link - Blanket Order	*/
	blanket_order?: string
	/**	Blanket Order Rate : Currency	*/
	blanket_order_rate?: number
	/**	BOM No : Link - BOM	*/
	bom_no?: string
	/**	Projected Qty : Float	*/
	projected_qty?: number
	/**	Actual Qty : Float	*/
	actual_qty?: number
	/**	Ordered Qty : Float	*/
	ordered_qty?: number
	/**	Planned Quantity : Float - For Production	*/
	planned_qty?: number
	/**	Production Plan Qty : Float	*/
	production_plan_qty?: number
	/**	Work Order Qty : Float	*/
	work_order_qty?: number
	/**	Delivered Qty : Float	*/
	delivered_qty?: number
	/**	Produced Quantity : Float - For Production	*/
	produced_qty?: number
	/**	Returned Qty : Float	*/
	returned_qty?: number
	/**	Picked Qty (in Stock UOM) : Float	*/
	picked_qty?: number
	/**	Additional Notes : Text	*/
	additional_notes?: string
	/**	Page Break : Check	*/
	page_break?: 0 | 1
	/**	Item Tax Rate : Code	*/
	item_tax_rate?: string
	/**	Sales Order Date : Date - Used for Production Plan	*/
	transaction_date?: string
	/**	Material Request : Link - Material Request	*/
	material_request?: string
	/**	Purchase Order : Link - Purchase Order	*/
	purchase_order?: string
	/**	Material Request Item : Data	*/
	material_request_item?: string
	/**	Purchase Order Item : Data	*/
	purchase_order_item?: string
}