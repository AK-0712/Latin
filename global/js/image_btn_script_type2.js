var fev_imgBtnClick = {
	// Page loaded		
	init_fun: function () {
		fev_imgBtnClick.applyAction();
	},

	// assign mouse/key events 
	applyAction: function () {
		fev_imgBtnClick.setIntCirclet()
		$(".fev_imgBtnClick  .clickbtn").off("click touchstart", fev_imgBtnClick.fev_onPopupOpen).on("click touchstart", fev_imgBtnClick.fev_onPopupOpen)
		$(".fev_imgBtnClick  .clickbtn").attr({ "tabindex": "0" })
		$(".fev_imgBtnClick  .fev_closeit").off("click touchstart", fev_imgBtnClick.fev_imgBtnClick).on("click touchstart", fev_imgBtnClick.fev_imgBtnClick)
		$(".fev_imgBtnClick  .fev_poup_bgblack").off("click touchstart", fev_imgBtnClick.fev_imgBtnClick).on("click touchstart", fev_imgBtnClick.fev_imgBtnClick);

		$(".fev_imgBtnClick .fev_modalbtn").off("click", fev_imgBtnClick.fev_onInstructionClose).on("click", fev_imgBtnClick.fev_onInstructionClose)
		$(".fev_imgBtnClick .fev_question_mark").off("click", fev_imgBtnClick.fev_onInstructionOpen).on("click", fev_imgBtnClick.fev_onInstructionOpen)

		$("a.print").each(function () {
			$(this).attr("tabindex", "0")
		})
		$(".fev_imgBtnClick .fev_popupContent").hide()
		//$(".fev_imgBtnClick .fev_popupContent#arrow_0").show();
		//$(".fev_imgBtnClick .fev_popupHolder").show()


	},
	setIntCirclet:function(){
		var count = 0
		var postionArr = ["60px","230px","400px","570px","130px","320px","510px"];	
		$(".fev_imgBtnClick  .clickbtn").css("transform","scale(1.4)")	
		$(".fev_imgBtnClick .fev_tip img").css("bottom","100px")
		$(".fev_imgBtnClick .fev_tip img").css("left","-45px")
		$(".fev_imgBtnClick .fev_tip .arrow").css("bottom","100px")
		
		$('.fev_imgBtnClick .butnContainer').children('.fev_tip').each(function () {
			$(this).css("left",postionArr[count])
			if(count<4){
				$(this).css("bottom","250px")	

			}
			else{
				$(this).css("bottom","90px")
			}
			count++
		});

	},
	set_small_button:function(){
		$(".fev_imgBtnClick  .clickbtn").css("transform","none")
		$(".fev_imgBtnClick .fev_tip img").css("bottom","80px")
		$(".fev_imgBtnClick .fev_tip .arrow").css("bottom","80px")
		var count = 0
		var startcount=18
		$('.fev_imgBtnClick .butnContainer').children('.fev_tip').each(function () {
			$(this).css("left",(startcount+"px"))
			$(this).css("bottom","0px")			
			count++
			startcount = startcount+102
		});
	},
	fev_imgBtnClick: function () {
		var id = "#" + $(".fev_imgBtnClick .fev_popupContent:visible").data("popid");
		$(".fev_imgBtnClick  .clickbtn").attr({ "tabindex": "0" });
		$(".fev_imgBtnClick .fev_popupHolder").hide();
		$(id).focus();
		$(".fev_imgBtnClick .fev_popupContent").hide()
	/* 	$(".fev_imgBtnClick .fev_popupContent#arrow_0").show();
		$(".fev_imgBtnClick .fev_popupHolder").show() */
		$(".fev_imgBtnClick .fev_closeit").hide()
		$(".fev_imgBtnClick .fev_popupwin").focus();
		$(".fev_imgBtnClick  .clickbtn").css("outline","none")
		//$(".fev_imgBtnClick  .clickbtn").blur();
		fev_imgBtnClick.setIntCirclet()
	},

	fev_onPopupOpen: function () {
		var instrn_pop = "fev_imgbtn_0"
		$(this).closest(".fev_imgBtnClick").find("[data-popid='" + instrn_pop + "']").hide();
		$(".fev_imgBtnClick .fev_popupwin").attr({ "tabindex": "0" })
		$(".fev_imgBtnClick .fev_popupContent").hide()
		$(".fev_imgBtnClick  .clickbtn").css("outline","none")	
		var id = $(this).attr("id");
		$(this).closest(".fev_imgBtnClick").find("[data-popid='" + id + "']").show();
		$(".fev_imgBtnClick .fev_popupHolder").show();
		//$(".fev_imgBtnClick  .clickbtn").attr({ "tabindex": "-1" })
		$(".fev_imgBtnClick .fev_popupwin").focus();
		$(".fev_imgBtnClick .fev_closeit").show();
		$(this).css("outline","4px solid white");
		fev_imgBtnClick.set_small_button()
		
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