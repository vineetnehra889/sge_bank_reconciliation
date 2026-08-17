frappe.pages['bank-reconciliation'].on_page_load = function (wrapper) {
	// Redirect to the Sehyog Bank Reconciliation web app
	window.location.href = '/sge-bank-reco';

	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Bank Reconciliation"),
		single_column: true,
	});

	page.set_primary_action("Open Bank Reconciliation", function () {
		window.location.href = '/sge-bank-reco';
	});
}
