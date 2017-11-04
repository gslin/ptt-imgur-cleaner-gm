// ==UserScript==
// @name          Ptt Imgur Cleaner
// @namespace     https://blog.gslin.org/ptt-imgur-gm
// @description   Replace smaller version Imgur image to large one.
// @include       https://www.ptt.cc/*
// @run-at        document-idle
// @version       20171104.0
// ==/UserScript==

(function(){
    setInterval(function(){
        var targets = document.querySelectorAll('.richcontent iframe.imgur-embed-iframe-pub');
        targets.forEach(function(el){
            var id = el.getAttribute('id').substring(23);

            // Always using .png
            var img = document.createElement('img');
            img.setAttribute('src', '//i.imgur.com/' + id + '.png');

            el.parentNode.replaceChild(img, el);
        });
    }, 500);
})();
