import frappe

@frappe.whitelist(allow_guest=True)
def get_item_groups_options():
    item_groups = frappe.db.sql("""
        SELECT
            name, parent_item_group, is_group, lft, rgt
        FROM
            `tabItem Group`
        WHERE show_in_website = 1 AND is_group = 1                        
        ORDER BY
            lft ASC
    """, as_dict=True)

    return item_groups