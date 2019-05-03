// ==UserScript==
// @name          Ptt Imgur Cleaner
// @namespace     https://blog.gslin.org/ptt-imgur-gm
// @description   Replace smaller version Imgur image to large one.
// @include       https://www.ptt.cc/bbs/*
// @run-at        document-idle
// @version       0.20190504.1
// @grant         none
// @run-at        document-start
// @license       MIT
// ==/UserScript==

(function(){
    let head = document.getElementsByTagName('head')[0];

    let meta = document.createElement('meta');
    meta.setAttribute('content', 'same-origin');
    meta.setAttribute('name', 'Referrer');
    head.appendChild(meta);

    let css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = ".richcontent { max-width: 100%; }\nimg { max-height: 100%; }";
    head.appendChild(css);

    setInterval(() => {
        let targets = document.querySelectorAll('.richcontent iframe.imgur-embed-iframe-pub');
        targets.forEach(el => {
            var id = el.getAttribute('id').substring(23);

            // Always using .png
            var img = document.createElement('img');
            img.setAttribute('src', '//i.imgur.com/' + id + '.png');

            el.parentNode.replaceChild(img, el);
        });
    }, 200);
})();
