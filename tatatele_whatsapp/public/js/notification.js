frappe.ui.form.on('Notification', {
	refresh(frm) {
		// your code here   
	},
	
	document_type: function(frm) {
        frm.doc.custom_tatatele_whatsapp_template_fields = "";
	    frm.refresh_field("custom_tatatele_whatsapp_template_fields");

	    var str = "name\n";
	    var doc_fields = frappe.get_meta(frm.doc.document_type).fields;
	    doc_fields.forEach(element => {
	        if(element.fieldtype == "Section Break" || element.fieldtype == "Column Break"){
	            
	        }else{
    	        str = str + element.fieldname + "\n"    
	        }
	        
	    });
	    var df = frappe.meta.get_docfield("Tatatele Whatsapp Template Fields","field_name", cur_frm.doc.name);
	    df.options = str;
	    
	},
	custom_whatsapp_account: function(frm) {
		console.log("JI");
		frm.set_query("custom_whatsapp_template_name", function() {
            return {
                filters: [
                    ["Tatatele Whatsapp Template", "whatsapp_account", "=", frm.doc.custom_whatsapp_account]
                    
                ]
            };
        });
	}
})