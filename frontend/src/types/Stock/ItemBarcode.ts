
export interface ItemBarcode{
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
	/**	Barcode : Data	*/
	barcode: string
	/**	Barcode Type : Select	*/
	barcode_type?: "" | "EAN" | "UPC-A" | "CODE-39" | "EAN-12" | "EAN-8" | "GS1" | "GTIN" | "ISBN" | "ISBN-10" | "ISBN-13" | "ISSN" | "JAN" | "PZN" | "UPC"
	/**	UOM : Link - UOM	*/
	uom?: string
}