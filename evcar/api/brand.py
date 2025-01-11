import frappe

@frappe.whitelist(allow_guest=True)
def get_brand_options():
    brands = frappe.get_all(
        'Brand', 
        fields=['name']
    )
    return brands