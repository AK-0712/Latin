var _latin = {
    imageAlt: "",
    "dialogHead": function () {
        // Module 1 - roman_detective Head
        $(document).find(".icon_local.roman_detective").html("<img src='../../global/images/icons/roman_detective.jpg' alt='Detective Arcanus'><span class='copyright'>©Shutterstock</span>");
        $(document).find(".icon_local.roman_detective").attr("data-alt", "Detective Arcanus"); 
        $(document).find(".icon_local.athena_icon").html("<img src='../../global/images/icons/athena_icon.jpg' alt='Statue of Athena'><span class='copyright'>©Shutterstock</span>");
        $(document).find(".icon_local.athena_icon").attr("data-alt", "Statue of Athena");  
        // Module 2 - Parcae image 
        
        
    },

    "glossaryWrap": function () {
        $(document).find(".pop-over").each(function () {
            $(this).wrap("<span class='noWrap glossary-deco'></span>");
        })
    },

    "checkModalTitle": function () {
        // $(".wp-caption, .image-container").on("click", function () {
        //     setTimeout(findCaption, 500);
        // })
        $("#cboxNext, #cboxPrevious").on("click", function () {
            setTimeout(_latin.findCaption, 50);
        })
    },

    lightboxOnComplete: function () {
        _latin.imageAlt = "";
        var zoombtn = $(".image-container a.lightbox.cboxElement");
        // if ($(zoombtn).length && $(".enlangeimgfn").length) {
        if ($(zoombtn).length) {
            $(zoombtn).off("click", checkaltText).on("click", checkaltText);
            function checkaltText() {
                _latin.imageAlt = $(this).closest(".image-container").find("a:eq(0) img").attr("alt");
                console.log("EX", _latin.imageAlt)
            }
        }

        $(document).bind('cbox_complete', function (e) {
            $("#colorbox #cboxLoadedContent img.cboxPhoto").attr("alt", _latin.imageAlt);
            // $("#colorbox #cboxTitle")           
            _latin.findCaption();

        });
    },

    "ctr_enter": function () {
        $(document).find(".panel .panel-heading").attr("tabindex", "0");
        $(".panel .panel-heading").on("keyup", function (e) {
            if (e.keyCode == 13) {//key symbol [enter]
                $(this).click();
            }
        })
    },

    findCaption: function () {
        $(document).find("#cboxTitle").each(function () {
            var _cTitlePart = $(this).html().split("|");
            if (_cTitlePart[0].length == 0 && _cTitlePart.length <= 1) {
                return;
            }
            var popcaption = _cTitlePart.filter(function (el) {
                return el.trim() != "";
            });
            $(this).html(popcaption.join("|"));

            // if (_cTitlePart[1] == "" || _cTitlePart[1] == " " || _cTitlePart[1] == "  ") {
            //     $(this).html(_cTitlePart[0]);
            // }
        })
    },
    fev_onpageCheckbox: function () {

        function init() {
            if ($(".fev_onpage-checkbox.table-decorative-checkbox p, .fev_onpage-checkbox.list-decorative-checkbox li").length) {
                $(document).find(".table-decorative-checkbox:not(.fev_checkboxdisable) p").off("click", togglecheckboxclass).on('click', togglecheckboxclass);
                $(".fev_onpage-checkbox.table-decorative-checkbox:not(.fev_checkboxdisable) p,.fev_onpage-checkbox.list-decorative-checkbox:not(.fev_checkboxdisable) li").attr("tabindex", "0");
                $(".fev_onpage-checkbox.table-decorative-checkbox:not(.fev_checkboxdisable) p ").off("keypress", keypressfn).on("keypress", keypressfn)
            }
        }

        function togglecheckboxclass() {
            $(this).toggleClass('check');
        }
        function keypressfn(e) {
            if (e.which == 13) {
                $(this).click();
            }
        }

        init();
    },

    fev_imgcardsholder: function () {
        $(".fev_imgcardsholder").each(function () {
            var fev_imgcards = $(this).find(">.fev_imgcards");
            var imageContainer = $(fev_imgcards).find(".image-container")
            if ($(fev_imgcards).length == 2) {
                $(this).addClass("fev_twocards");
            }
            $(imageContainer).find(".caption").remove();
            $(imageContainer).each(function () {
                if ($(this).find(".copyright").length == 0) {
                    $(this).addClass("nocopyright");
                }
            })
        })

    },

    main_init: function () {
        _latin.fev_onpageCheckbox()
        _latin.fev_imgcardsholder()
    },

    addTabindex:function(){
        $(document).find("figure.effect-sarah").each(function(){
            var _this=$(this)
            _this.attr("tabindex","0")
            /* _this.find("a.pop-over").attr({"tabindex":"-1","aria-hidden":"true"})
            _this.on("focus",()=>{_this.find("a.pop-over").attr({"tabindex":"0"}).removeAttr("aria-hidden")}).on("blur",function(){_this.find("a.pop-over").attr({"tabindex":"-1","aria-hidden":"true"})}) */
        })
        $(document).find(".htmltext_version .video_textVersion a.printText").each(function() {
            $(this).attr("tabindex", "0")
            $(this).on("keyup", function(e) {
                if (e.keyCode == 13) { //key symbol [enter]
                    $(this).click();
                }
            })
        }),
        $(document).find(".htmltext_version .audio_textVersion a.printText").each(function() {
            $(this).attr("tabindex", "0")
            $(this).on("keyup", function(e) {
                if (e.keyCode == 13) { //key symbol [enter]
                    $(this).click();
                }
            })
        })
        $(document).find(".htmltext_version .audio_textVersion a.printText").each(function() {
            $(this).attr("tabindex", "0")
            $(this).on("keyup", function(e) {
                if (e.keyCode == 13) { //key symbol [enter]
                    $(this).click();
                }
            })
        }),
        $(document).find(".fev_click_highlight_btn button.toggleSwitch").each(function() {
            $(this).attr("tabindex", "0")
            $(this).on("keyup", function(e) {
                if (e.keyCode == 13) { //key symbol [enter]
                    $(this).click();
                }
            })
        })     
        
    },

    figure_popOver:function(){
        $(document).find("figure.effect-sarah").each(function(){
            var popoverbtn = $(this).find("figcaption .glossary-deco a.pop-over");

            $(popoverbtn).off("focus", onfocustooltip).on("focus", onfocustooltip);
            $(popoverbtn).off("blur", onblurtooltip).on("blur", onblurtooltip);

            function onfocustooltip(){
                $(this).closest(".effect-sarah").addClass("fev_overflowShow")
            }

            function onblurtooltip(){
                $(this).closest(".effect-sarah").removeClass("fev_overflowShow")
            }
          
        })
    },
    carouselAttr:function(){      
        $(document).find(".carousel").each(function(){            
            $(this).attr("data-wrap","true")          
        })
    },
    carousel_Nav:function(){        
        // $('.carousel .carousel-control.left').children().last().remove()
        // $('.carousel .carousel-control.right').children().last().remove();

        $(".carousel a.carousel-control").each(function(){
            var sronly = $(this).find("span.sr-only");           
            if($(sronly).length>1){
                var clone = $(sronly).eq(0).clone();
                $(sronly).remove()
                $(this).append($(clone))
            }
        })
    
       /*  $('.carousel .carousel-control.left').hide();
       
        $('.carousel').on('slid.bs.carousel', function (e) {   
            var firstChild = $(e.target).find(".carousel-inner").children().first()
            var lastChild = $(e.target).find(".carousel-inner").children().last()  
           
            var prev = $(e.target).find('.carousel-control.left')
            var next = $(e.target).find('.carousel-control.right')
            $(prev).show();
            $(next).show();
             if ($(firstChild).hasClass('active')) {
                $(prev).hide();               
            }
            else if ($(lastChild).hasClass('active')) {                
                $(next).hide();
            }  
        }) */
    }
    ,
    createDialog: function (title, directions, btnname, container, firstCheck) {
        //	Default button name
        btnname = btnname || "Begin"
        container = container || $('#content')
        let index = $('.dialog').length
        _latin.instr_opened = true
        $(".carousel .il_question_mark").attr("disabled", true);
        let new_dialog = $('<div />').attr({
            class: "dialog",
            id: 'dialog_' + index,
            title: title
        }).html(directions)

        $(container).append(new_dialog)

        new_dialog.dialog({
            buttons: [{
                text: btnname,
                click: function () {
                    $(this).dialog("close")

                    if (container.attr('id') === "overlay") {
                        container.fadeOut()
                    }
                },
                keydown: function (e) {
                    let elem = $(this)
                    console.log(elem, elem.attr('tabindex'))
                    if (e.keyCode !== 9) return

                    if (container.hasClass('instructions-container')) setTimeout(() => {
                        if (e.shiftKey) container.focus()
                        else container.siblings('.il_question_mark').focus()
                    }, 80)
                }
            }],

            draggable: false,
            resizable: false,
            close: function () {
                $(this).dialog('destroy').remove()
                $(this).trigger('NEW-BUTTON-CLOSED')
                _latin.instr_opened = false
                $(".carousel .il_question_mark").attr("disabled", false);
            },

            focus: function () {
                if (typeof firstCheck !== 'undefined' && firstCheck) {
                    $("#menu_outer").focus()
                    //$('body > .wrapper').scrollTop(0)
                    $(window).scrollTop(0) 
                }
            },

            open: function () {
                $(this).trigger('NEW-BUTTON')
            },
            hide: {
                effect: 'fade',
                duration: 200
            },
            show: {
                effect: "fade",
                duration: 200
            }
        }).parent().appendTo(container)

        new_dialog.parent().addClass('dialog-css-position')

        return new_dialog
    },
    showInstructions: function () {
        console.log("show text version")
        let parent = $(document).find('.carousel')
        let instructions = $('.instructions.hidden', parent).html()

        let firstCheck = parent.data('initialized') === undefined
        if (firstCheck) parent.data('initialized', true)
        $(".carousel .il_question_mark").attr("disabled", false);
        if (_latin.instr_opened == true) {
            return;
        }
        _latin.createDialog("Instructions", instructions, "OK", parent.find('.instructions-container'), firstCheck)
    },
    textRevel: function () {
        _latin.initializeFlipcards();
        _latin.initializeTextReveal();
        $('.carousel .il_question_mark').before('<div class="instructions-container" tabindex="0" />').click(_latin.showInstructions).click()
        //_latin.showInstructions();
    },
    initializeFlipcards: function () {
        let container = $('.flip-container')

        if (!container.length) return

        container
            .keypress(function (e) {
                if (e.keyCode === 13 && $(this).hasClass('active')) $(this).toggleClass('hover')
            })
            .find('.front').click(function () {
                console.log("front click")
                $(this).parents('.flip-container').addClass('hover').focus()
            }).end()
            .find('.back').click(function () {
                console.log("end click")
                $(this).parents('.flip-container').removeClass('hover').focus()
            })
    },
    initializeTextReveal: function () {
        let carousel = $('.carousel.text-reveal')

        carousel
            .on('slid.bs.carousel', function () {
                $(this).find('.item.active').removeAttr('tabindex')
            })
            .find('.flip-container').click(showWarning).end()
            .find('.flipper').click(function (e) { e.stopPropagation() }).end()
            .find('textarea').val('').keyup(monitorGlossing).end()
            .find('.reset').click(resetTextReveal)


        function monitorGlossing() {
            let val = $(this).val()
            let flip = $(this).parents('.item').find('.flip-container')

            if (!val) flip.removeClass('active')
            else flip.addClass('active')
        }

        function resetTextReveal() {
            carousel.carousel(0)
            carousel.find('textarea').val('').end()
        }

        function showWarning() {
            setTimeout(() => {
                $(this).parents('.item').find('textarea').focus()
            }, 200)
        }
    },
    fev_vocab_text: function() {
        $(".show-grid").find("figure.wp-caption figcaption.wp-caption-text").each(function() {
            $(this).off("click").on("click", function() {
                $(this).closest("figure.wp-caption").find("a.vocabElement").click()
                    //console.log("vocab active")
            })
        })
    }

}
function fev_slide_show_nav(){
    $(document).find(".fev_slide_show .carousel-control").attr("href", ".carousel")
}
function fev_carousel_controls() {
    var btnloader = "";
    $(document).find(".fev_carousel_controls").each(function (i) {
        checkloading($(this), i)
    })

    function checkloading(_this, indx) {
        var that = $(_this).eq(indx)
        var insbox = $(that).find(".instructions-container button")
        var items = $(that).find("div.carousel-inner>.item")

        if ($(insbox).length && $(items).length) {
            callAction(that)
        } else {
            setTimeout(function () {
                checkloading(_this, indx)
            }, 500)
        }
    }

    function callAction(_that) {
        var questionbtn = $(_that).find("button.il_question_mark");
        btnloader = $(questionbtn)
        $(questionbtn).off("click", onClick_questionbtn).on("click", onClick_questionbtn)
        onClick_questionbtn()
    }



    function onClick_questionbtn() {
        var _this = $(this)
        if (!_this.hasClass("il_question_mark")) { _this = btnloader }
        var par = $(_this).closest(".fev_carousel_controls")
        var insbox = $(par).find(".instructions-container")

        $(insbox).show()
        setTimeout(function () {
            applyAssisibility(_this)
        }, 200)
    }

    function applyAssisibility(_this) {
        var par = $(_this).closest(".fev_carousel_controls")
        var activeitem = $(par).find(".item.active")
        var insbox = $(par).find(".instructions-container")      
        var thisdialogbtn = $(insbox).find("button")
        var tnf = $(insbox).is(":visible");
        var textarea = $(activeitem).find("textarea.form-control")
        var flipbtn = $(activeitem).find("div.flip-container")
        var lightboxbtn = $(activeitem).find(".image-container a");
        var sliderbutton = $(par).find("a.carousel-control");
        var carousel_indicators = $(par).find("ol.carousel-indicators li")
        //--- 
        var innerpar = $(par).find(".carousel-inner");
        $(innerpar).removeAttr("aria-hidden")
        $(_this).removeAttr("tabindex").removeAttr("aria-hidden")
        $(textarea).removeAttr("readonly")
        $(flipbtn).attr("tabindex", 0)
        $(lightboxbtn).removeAttr("tabindex");
        $(sliderbutton).removeAttr("tabindex").removeAttr("aria-hidden");
        $(carousel_indicators).removeAttr("tabindex").removeAttr("aria-hidden");

        if (tnf) {
            $(innerpar).attr("aria-hidden", tnf);
            $(_this).attr({ "tabindex": "-1", "aria-hidden": tnf })
            $(textarea).attr("readonly", true)
            $(flipbtn).attr("tabindex", -1)
            $(lightboxbtn).attr("tabindex", -1)
            $(sliderbutton).attr({ "tabindex": "-1", "aria-hidden": tnf })
            $(carousel_indicators).attr({ "tabindex": "-1", "aria-hidden": tnf })
        }

        setTimeout(function () {
            if ($(thisdialogbtn).length) {
                $(thisdialogbtn).off("click", fev_onClick_dialogbtn).on("click", fev_onClick_dialogbtn)
            }
        }, 500)

    }

    function fev_onClick_dialogbtn() {
        var par = $(this).closest(".fev_carousel_controls")
        var qustionbtn = $(par).find("button.il_question_mark");
        var insbox = $(par).find(".instructions-container")
        $(insbox).hide()
        applyAssisibility(qustionbtn)
    }
  

}
/* function QuizmoLoadFun(){    
 
    var copy_right_btn = ""
    var displayStatus = "none";
    $(document).find(".fev_story_bulder .storybuilder").each(function () {       
            var this_ref_obj = $(this)
                if($(this).find(".il_copyright")!="udefined"){
                copy_right_btn = $(this).find(".il_copyright")
                $(copy_right_btn).on("click", function () {
                    displayStatus = $(this_ref_obj).find(".il_copyrightDisplay").css("display")                    
                    if(displayStatus == "none"){
                        $(this_ref_obj).find(".il_copyrightDisplay").css("display","block")

                    }
                    else{
                        
                        $(this_ref_obj).find(".il_copyrightDisplay").css("display","none")
                    }
                    
                }) 
            } 
    })
   
} */
$(document).ready(function () {
    $(document).keyup(function (e) {
        if (e.keyCode == 192) {//key symbol [`]
            if ($("body").hasClass("checklangspan")) {
                $("body").removeClass("checklangspan")
            } else {
                $("body").removeClass("checklangspan")
                $("body").addClass("checklangspan")
            }
        }
    })

    // _latin.dialogHead();
    _latin.addTabindex();
    _latin.glossaryWrap();
    _latin.checkModalTitle();
    _latin.ctr_enter();
    _latin.lightboxOnComplete();
    _latin.figure_popOver()
    _latin.carousel_Nav()
    _latin.carouselAttr()
    _latin.textRevel();
    _latin.fev_vocab_text();
    fev_carousel_controls()
    setTimeout(fev_slide_show_nav, 300);   
    setTimeout(_latin.main_init, 300);
})

_latin.dialogHead();


