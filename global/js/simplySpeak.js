// Customization settings
if(typeof(FLVS) != 'undefined') {
    FLVSanalyticsCode = FLVS.settings.ua_account;
}else{
    FLVSanalyticsCode = '';
}

var sptConfig = {
    version: 'cdn', // SPT location -- local, dev, or cdn
    pathToLocalSPT: 'http://localhost/SpeechPracticeTool/SpeechPracticeTool/',      // WITH trailing slash (/)

    //Settings
    recordButton: 'Record',
    recordButtonActive: 'Stop',
    listenButton: 'Play',
    listenButtonActive: 'Stop',
    practiceText: 'Select begin to practice saying',
    practiceButton: 'Begin',
    locale: 'la',

    //Styles
    buttonBorderColor: '#4d579b',
    buttonBackgroundColor: '#FFF',
    buttonTextColor: '#4d579b',
    buttonHoverBackgroundColor: '#4d579b',
    buttonHoverTextColor: '#FFF',
    textColor: '#000',
    saveIconColor: '#4d579b',

    //Error message
    errorShowMsg: true,
    errorThreshold: 50,         // If the student's score is LESS THAN OR EQUAL TO this percentage,
    errorTries: 2,              // this many times, it will show the following message...
    errorMsg: '<p><strong>Having Trouble?</strong></p><p>Speaking and listening are difficult skills to master... for students, and for computers. If you\'re still having trouble, it may be a technical issue.</p>',     // The error message itself
    errorMsgBtn: 'Keep Practicing!',    // The button on the error message

    //Google Analytics
    analyticsCode: FLVSanalyticsCode, // DON'T EDIT THIS... IT'S GRABBED FROM SETTINGS.JS

    openWindowText: 'Select Open to launch the Speech Practice Tool. Use the tool to practice saying',
    openWindowButton: 'Open'
}


//=======================================//
//===== DO NOT EDIT BELOW THIS LINE =====//
//=======================================//

var params = '';
if(typeof sptConfig !== 'undefined') {
    params += '&sptConfig=' + encodeURIComponent(JSON.stringify(sptConfig));
}

var serverURL;
if(sptConfig.version === 'local'){
    serverURL = sptConfig.pathToLocalSPT;
}else if(sptConfig.version === 'dev'){
    serverURL = 'https://cdn.flvs.net/cdn/SpeechPracticeTool_dev/'
}else{
    serverURL = 'https://cdn.flvs.net/cdn/SpeechPracticeTool/';
}

function loadScript(url)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

$(document).ready(function () {
    loadScript(serverURL+'js/createSPT.js');
});