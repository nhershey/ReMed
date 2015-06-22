/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */


jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('.basic').click(function (e) {
		if ($(this).hasClass("manageProvider")) {
			$("#modal-content-deleteProvider").modal();
			$("#simplemodal-container").css("height","200px");
			var id = $(this).attr('id');
			var first = $("#tblProviderFirst"+id).html()
			var last = $("#tblProviderLast"+id).html()
			$("#deleteName").html(first + " " + last);
			if ($(this).hasClass("deleteProvider"))
				$("#deleteCommand").html("remove");
			if ($(this).hasClass("denyProvider"))
				$("#deleteCommand").html("deny");
			if ($(this).hasClass("acceptProvider"))
				$("#deleteCommand").html("accept");
		}
		else {
			$('#modal-content').modal();
		}
		if ($(this).attr('id') == "btnAddPatient") {
			$("#simplemodal-container").css("height","370px");
		}
		return false;
	});
});