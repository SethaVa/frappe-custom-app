import frappe
import requests

@frappe.whitelist()
def get_charging_stations(latitude, longitude):
    url = "https://api.openchargemap.io/v3/poi/"
    params = {
        "latitude": latitude,
        "longitude": longitude,
        "key": "587c15dd-568a-49b7-a80d-f20c1bbeb5b9" 
    }

    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        frappe.log_error(frappe.get_traceback(), "OpenChargeMap API Error")
        frappe.throw("Failed to fetch charging station data. Please try again.")
