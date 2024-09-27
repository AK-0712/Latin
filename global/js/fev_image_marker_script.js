var fev_imgClick = {
	// Page loaded
	init: function () {
		fev_imgClick.applyAction();
	},

	// assign mouse/key events 
	applyAction: function () {
		$(".fev_imgClick  .imgclickbtn").off("click", fev_imgClick.onPopupOpen).on("click", fev_imgClick.onPopupOpen)
		$(".fev_imgClick  .imgclickbtn").attr({ "tabindex": "0", "aria-label": "hotspot" })
		$(".fev_imgClick  .closeit").off("click", fev_imgClick.onPopupClose).on("click", fev_imgClick.onPopupClose)
		$(".fev_imgClick  .poup_bgblack").off("click", fev_imgClick.onPopupClose).on("click", fev_imgClick.onPopupClose);

		$(".fev_imgClick .fev_modalbtn").off("click", fev_imgClick.onInstructionClose).on("click", fev_imgClick.onInstructionClose)
		$(".fev_imgClick .fev_questionmark").off("click", fev_imgClick.onInstructionOpen).on("click", fev_imgClick.onInstructionOpen)

		$("a.print").each(function () {
			$(this).attr("tabindex", "0")
		})

	},

	onPopupClose: function () {
		var id = "#" + $(".fev_imgClick .popupContent:visible").data("popid");
		$(".fev_imgClick  .imgclickbtn").attr({ "tabindex": "0" });
		$(".fev_imgClick .popupHolder").hide();
		$(id).focus();
	},

	onPopupOpen: function () {
		$(".fev_imgClick .popupwin").attr({ "tabindex": "0" })
		$(".fev_imgClick .popupContent").hide()
		var id = $(this).attr("id");
		$(this).closest(".fev_imgClick").find("[data-popid='" + id + "']").show();
		$(".fev_imgClick .popupHolder").show();
		$(".fev_imgClick  .imgclickbtn").attr({ "tabindex": "-1" })
		$(".fev_imgClick .popupwin").focus();
	},

	onInstructionOpen: function () {
		$(".fev_imgClick .fev_instructionsholder").show();
		setTimeout(function () {
			$(".fev_imgClick .fev_modalbtn").focus();
		}, 100);
		fev_activity.applyAriatag();
	},

	onInstructionClose: function () {
		$(".fev_imgClick .btnHolder, .fev_imgClick .fevClickbtn, .fev_imgClick .fev_questionmark").removeAttr("aria-hidden");
		$(".fev_imgClick .fevClickbtn, .fev_imgClick .fev_questionmark").attr({ "tabindex": "0" })
		//$(".fev_H_RevealBtn a.ui-slider-handle").attr({ "tabindex": "0" });
		//---------------
		$(".fev_imgClick .fev_instructionsholder").hide();
		$(".fev_imgClick .fev_questionmark").focus();
	}
}

$(document).ready(fev_imgClick.init);