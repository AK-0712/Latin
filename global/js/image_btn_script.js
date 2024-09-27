var fev_imgBtnClick = {
	// Page loaded
	init_fun: function () {
		fev_imgBtnClick.applyAction();		
	},

	// assign mouse/key events 
	 applyAction: function () {
		$(".fev_imgBtnClick  .clickbtn").off("click touchstart", fev_imgBtnClick.fev_onPopupOpen).on("click touchstart", fev_imgBtnClick.fev_onPopupOpen)
		$(".fev_imgBtnClick  .clickbtn").attr({ "tabindex": "0", "aria-label": "hotspot" })
		$(".fev_imgBtnClick  .fev_closeit").off("click touchstart", fev_imgBtnClick.fev_imgBtnClick).on("click touchstart", fev_imgBtnClick.fev_imgBtnClick)
		$(".fev_imgBtnClick  .fev_poup_bgblack").off("click touchstart", fev_imgBtnClick.fev_imgBtnClick).on("click touchstart", fev_imgBtnClick.fev_imgBtnClick);

		$(".fev_imgBtnClick .fev_modalbtn").off("click", fev_imgBtnClick.fev_onInstructionClose).on("click", fev_imgBtnClick.fev_onInstructionClose)
		$(".fev_imgBtnClick .fev_question_mark").off("click", fev_imgBtnClick.fev_onInstructionOpen).on("click", fev_imgBtnClick.fev_onInstructionOpen)

		$("a.print").each(function () {
			$(this).attr("tabindex", "0")
		})

	},

	fev_imgBtnClick: function () {
		var id = "#" + $(".fev_imgBtnClick .fev_popupContent:visible").data("popid");
		$(".fev_imgBtnClick  .clickbtn").attr({ "tabindex": "0" });
		$(".fev_imgBtnClick .fev_popupHolder").hide();
		$(id).focus();
	},

	fev_onPopupOpen: function () {
		$(".fev_imgBtnClick .fev_popupwin").attr({ "tabindex": "0" })
		$(".fev_imgBtnClick .fev_popupContent").hide()
		var id = $(this).attr("id");
		$(this).closest(".fev_imgBtnClick").find("[data-popid='" + id + "']").show();
		$(".fev_imgBtnClick .fev_popupHolder").show();
		$(".fev_imgBtnClick  .clickbtn").attr({ "tabindex": "-1" })
		$(".fev_imgBtnClick .fev_popupwin").focus();
	},

	fev_onInstructionOpen: function () {
		$(".fev_imgBtnClick .fev_instructionsholder").show();
		setTimeout(function () {
			$(".fev_imgBtnClick .fev_modalbtn").focus();
		}, 100);
		fev_activity.applyAriatag();
	},

	fev_onInstructionClose: function () {
		$(".fev_imgBtnClick .btnHolder, .fev_imgBtnClick .fevClickbtn, .fev_imgBtnClick .fev_question_mark").removeAttr("aria-hidden");
		$(".fev_imgBtnClick .fevClickbtn, .fev_imgBtnClick .fev_question_mark").attr({ "tabindex": "0" })
		//$(".fev_H_RevealBtn a.ui-slider-handle").attr({ "tabindex": "0" });
		//---------------
		$(".fev_imgBtnClick .fev_instructionsholder").hide();
		$(".fev_imgBtnClick .fev_question_mark").focus();
	} 
}

$(document).ready(fev_imgBtnClick.init_fun);