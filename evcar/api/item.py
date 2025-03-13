import frappe

@frappe.whitelist(allow_guest=True)
def get_latest_products(category, limit=12):
    query = """
            SELECT
                i.name,
                i.item_name,
                i.description,
                i.image,
                i.valuation_rate,
                COALESCE(SUM(b.actual_qty), 0) AS stock_quantity
            FROM
                `tabItem` i
            LEFT JOIN
                `tabBin` b ON b.item_code = i.name   
            WHERE
                i.custom_category = %s
            GROUP BY
                i.name, i.item_name  
            ORDER BY
                name ASC
            LIMIT %s
        """
    products = frappe.db.sql(query, (category, limit), as_dict=True)
    return products

@frappe.whitelist(allow_guest=True)
def get_best_sale_items(category, limit=12):
    query = """
        SELECT
            sii.item_code AS name,
            i.item_name,
            i.description,
            i.image,
            i.valuation_rate,
            SUM(sii.qty) AS total_qty_sold,
            COALESCE(SUM(b.actual_qty), 0) AS stock_quantity
        FROM
            `tabSales Invoice Item` sii
        INNER JOIN
            `tabItem` i ON sii.item_code = i.name
        LEFT JOIN
            `tabBin` b ON b.item_code = i.name      
        WHERE
            sii.docstatus = 1 and i.custom_category = %s
        GROUP BY
            sii.item_code
        ORDER BY
            total_qty_sold DESC
        LIMIT %s
    """
    best_selling_items = frappe.db.sql(query, (category, limit), as_dict=True)

    if not best_selling_items:
        fallback_query = """
            SELECT
                i.name,
                i.item_name,
                i.description,
                i.image,
                i.valuation_rate,
                COALESCE(SUM(b.actual_qty), 0) AS stock_quantity
            FROM
                `tabItem` i
            LEFT JOIN
                `tabBin` b ON b.item_code = i.name  
            WHERE
                i.custom_category = %s    
            ORDER BY
                name ASC
            LIMIT %s
        """
        best_selling_items = frappe.db.sql(fallback_query, (category, limit), as_dict=True)

    return best_selling_items

@frappe.whitelist(allow_guest=True)
def get_items_detail_by_name(id):
    query = """
        SELECT
            i.name,
            i.item_name AS item_name,
            i.description,
            i.valuation_rate as price,
            i.image,
            GROUP_CONCAT(f.file_url) AS file_urls,
            COALESCE(SUM(b.actual_qty), 0) AS stock_quantity
        FROM
            `tabItem` i
        LEFT JOIN
            `tabFile` f
        ON
            f.attached_to_doctype = 'Item' AND f.attached_to_name = i.name
        LEFT JOIN
            `tabBin` b 
        ON b.item_code = i.name      
        WHERE i.name = %s     
        GROUP BY
            i.name
          
    """
    results = frappe.db.sql(query, id, as_dict=True)
    return results[0]

@frappe.whitelist(allow_guest=True)
def get_all_color_options():
    query = """
        SELECT name
        FROM `tabColor`
    """

    colors = frappe.db.sql(query, as_dict=True)

    return colors