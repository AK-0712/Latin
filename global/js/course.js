// ----------------------------------------------------------------------
// -- COURSE SPECIFIC JS:
// ----------------------------------------------------------------------
// -- NOTE: This is where you can add anything you need to do specifically to the course, it will load lastly.
// -- ABOUT: THis file will over-ride everything else, if you need to customize
// -- AUTHOR: You - WDS
// ======================================================================


$(function() {
    var loc = window.location.href; // returns the full URL

    // $('.menu_links').find('.tool-box, .speech_tool, .link_resources').attr('target', '_blank');
    $('.menu_links').find('.tool-box, .link_resources').attr('target', '_blank');
    $('.menu_links').find('.speech_tool');
    /* $('a', speech_tool).attr('target', '_blank') */


    // Add lang tags to popover titles
    $(':lang(la) .pop-over').on('click',function(){
        $(this).siblings('.popover').children('.popover-title').attr('lang','la');
    });

    if($('#externalContent').length > 0) {
        addExternalContentHolder();
    }

    /* $(".checklist a").each(function () {
      $(this).attr('lang', 'fr');
    });

    if($('.breadcrumbs_module').length && $('.breadcrumbs_module').html().indexOf('Collaboration') < 0) {
      $('.breadcrumbs_module').attr('lang','fr');
      $('.breadcrumbs_lesson').attr('lang','fr');
    }*/

    $('.lesson_checklist a').each(function(){
        if($(this).html().indexOf('Collaboration') >= 0) {
            $(this).removeAttr('lang');
        }
    });
});


// ================================================
// initialize QUIZMO
// ================================================
var ngLibraryLocation = "//cdn.flvs.net/cdn/il/ng_il/";
let ngDisableRemoteCss = false;

$.getScript(ngLibraryLocation + 'launcher.js');



// =======================================================
// list checkbox
// =======================================================
if ($('.list-decorative-checkbox').length) {
    $('.list-decorative-checkbox li').each(function () {
        $(this).attr('tabindex', '0');
    });
}
$('.list-decorative-checkbox li').on('keypress', function (event) {
    if (event.which === 13) {
        event.preventDefault();
        $(this).toggleClass('check');
    }
});
$('.list-decorative-checkbox li').on('click', function () {
    $(this).toggleClass('check');
});


function addExternalContentHolder() {
    var extContent = $('#externalContent').html();
    $('#externalContent').empty().prepend('<div class="extContainer"></div>');
    $('.extContainer').append(extContent);
}
