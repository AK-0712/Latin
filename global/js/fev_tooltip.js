
var fev_tooltip = {
    // HTML CODE TO USE IN ANGULAR ACTIVITY
    //<a href='javascript:void(0);' class='fev_tooltip' data-title='TITLE' data-placement='top' data-html='true' data-toggle='popover' data-content='DISPLAY CONTENT'>TITLE</a>

    checktooltip: function () {
        if ($(".fevng_tips a.fev_tooltip").length) {
            fev_tooltip.init()
        } else {
            setTimeout(fev_tooltip.checktooltip, 200);
        }
    },
    init: function () {
        $(".fevng_tips .fev_tooltip:not(.addedTooltip)").popover();
        $(".fevng_tips .fev_tooltip:not(.addedTooltip)").addClass("addedTooltip");
    }
}


$(document).ready(function () {
    fev_tooltip.checktooltip();
})



// THIS FOR TOOLTIP ON ROLLOVER
//<a href='javascript:void(0)' rel='tooltip' class='fev_tooltip' title='<strong>Photographer</strong>: an artist who take photographs with a camera' data-position='top'>photographer</a>
// var _fev_tooltip = {
//     checktooltip: function () {
//         if ($(".fevng_tips a.fev_tooltip").length) {
//             fev_tooltip.init()
//         } else {
//             setTimeout(fev_tooltip.checktooltip, 200);
//         }
//     },
//     init: function () {
//         $(".fev_tooltip:not(.addedTooltip)").tooltip();
//         $(".fev_tooltip:not(.addedTooltip)").off("mouseover focus", fev_tooltip.fev_tooltipfn).on("mouseover focus", fev_tooltip.fev_tooltipfn);
//         $(".fev_tooltip:not(.addedTooltip)").addClass("addedTooltip");
//     },
//     fev_tooltipfn: function () {
//         var inner = $(this).next().find(".tooltip-inner");
//         var txt = $(inner).text();
//         $(inner).html(txt);
//     }
// }

