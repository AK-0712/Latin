function _thisinit() {
    var audio_obj = document.getElementById("podcast_audio");
    var playstatus = false
    //show_hide_image(playstatus)
    audio_obj.onplay = function () {
        playstatus = true
        show_hide_image(playstatus)
    };
    audio_obj.onpause = function () {
        playstatus = false
        show_hide_image(playstatus)
    };
}
function show_hide_image(val) {
    //console.log("play status ",val)
    var pause_image = $(document).find(".fev_padcast .pause_img");
    var play_image = $(document).find(".fev_padcast .play_img");
    if (val == true) {
        $(pause_image).fadeOut()
        $(play_image).fadeIn()
    } else {
        $(pause_image).fadeIn()
        $(play_image).fadeOut()    

    }
}

$(document).ready(function () {
    setTimeout(_thisinit, 300);
})


