var fev_activity = {

	// Page loaded
	bgcolr: "",
	init: function () {
		setTimeout(fev_activity.applyAction, 300);
		$('.ans').css("display", "none");
		$('.slide-data').click(function () {
			$(this).siblings(".ans").toggle(300);
		});
	},

	/* $(document).find(".ilShell .ilTextVersion a.printText").each(function() {
            console.log("___________________")
            $(this).attr("tabindex", "0")
            $(this).on("keyup", function(e) {
                if (e.keyCode == 13) { //key symbol [enter]
                    $(this).click();
                }
            })
        }) */

	// assign mouse/key events 
	applyAction: function () {
		
		$(".fev_H_RevealBtn .fev_modalbtn").off("click", fev_activity.onInstructionClose).on("click", fev_activity.onInstructionClose)
		$(".fev_H_RevealBtn .fev_questionmark").off("click", fev_activity.onInstructionOpen).on("click", fev_activity.onInstructionOpen)
		$(".fev_H_RevealBtn  .fevClickbtn").each(function () {
			var bgcolor = $(this).css("background-color");
			$(this).attr("data-color", bgcolor)
		})
		$(".fev_H_RevealBtn  .fevClickbtn").off("click", fev_activity.on_Clicked).on("click", fev_activity.on_Clicked);
	},

	on_Clicked: function () {
		if ($(this).hasClass("slectedbtn")) {
			return false;
		}
		$(".fev_H_RevealBtn  .slectedbtn").removeClass("slectedbtn")
		$(".fev_H_RevealBtn .displaypopup").removeAttr("style");
		var bgcolr = $(this).data("color");
		var id = $(this).attr("id");
		var poup = $(".fev_H_RevealBtn .displaypopup[data-id='" + id + "']");
		$(poup).css({ "background-color": bgcolr, "color": "#ffffff", "font-weight": "bold"});
		var popholder = $(".fev_H_RevealBtn .popholder");
		$(this).after($(popholder));
		//$(popholder).show().attr("tabindex", "0");
		//$(popholder).focus();
		$(this).addClass("slectedbtn")
	},
	onInstructionOpen: function () {
		$(".fev_H_RevealBtn .fev_instructionsholder").show();
		fev_activity.Disable_AllBtn()
		setTimeout(function () {
			$(".fev_H_RevealBtn .fev_modalbtn").focus();
		}, 100);		
	},

	onInstructionClose: function () {		
		$(".fev_H_RevealBtn .fev_questionmark").attr({ "tabindex": "0" })		
		$(".fev_H_RevealBtn .fev_instructionsholder").hide();
		$(".fev_H_RevealBtn .fev_questionmark").focus();
		fev_activity.enabled_AllBtn()
	},
	Disable_AllBtn:function(){
		$(".fev_H_RevealBtn  .fevClickbtn").each(function () {			
			$(this).attr("tabindex", "-1")
		})	
		$(".fev_questionmark").attr("tabindex", "-1")
	},
	enabled_AllBtn:function(){
		$(".fev_H_RevealBtn  .fevClickbtn").each(function () {			
			$(this).attr("tabindex", "1")
		})	
		$(".fev_questionmark").attr("tabindex", "1")

	}
}

$(document).ready(fev_activity.init);
$(document).find(".ilShell .ilTextVersion a.printText").each(function() {
	console.log("___________________")
	$(this).attr("tabindex", "0")
	$(this).on("keyup", function(e) {
		if (e.keyCode == 13) { //key symbol [enter]
			$(this).click();
		}
	})
})