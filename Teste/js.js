function moveon() {
    var answer = confirm('Ready to move on?');
    if (answer) window.location = 'http://google.com';
}

function highlight(e){
    if (!e.className) e.className = 'hilite';
    else e.className += ' hilite';
}

window.onload = function(){
    var images = document.getElementsByTagName('img');
    for(var i= 0; i < images.length; i++){
        var image = images[i];
        if (image.addEventListener)
        image.addEventListener('click', hide, false);
        else
        image.attachEvent('onclick', hide);
    }
    function hide(event){event.target.style.visibility = 'hidden';}
}

function debug(msg){
    var log = $('debuglog');
    if (log.length == 0) {
        log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
        log.appendTo(document.body);
    }
    log.append($('<pre/>').text(msg));
}