var app = app || {};


app.Animation = (function () {
    var tl = new TimelineMax(),
        bubble,
        circle,
        txt1,
        cta,
        cta_txt,
        cta_ovr_txt,
        buttonExit,
        curtain;


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        curtain = document.getElementById('curtain');
        bubble = document.getElementById('bubble');
        cta_txt = document.getElementById('cta_txt');
        cta_ovr_txt = document.getElementById('cta_ovr_txt');
        buttonExit = document.getElementById('button-exit');
        cta = document.getElementById('cta');
        txt1 = document.getElementById('txt1');
        circle = document.getElementsByClassName("circle")
        TweenMax.set(bubble, {transformOrigin: 'bottom left'});

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta, .25, {backgroundColor: "#44c3b4"});
            TweenMax.set(cta_txt, {opacity: 0});
            TweenMax.set(cta_ovr_txt, {opacity: 1});
        });

        buttonExit.addEventListener('mouseout', function () {
            TweenMax.to(cta, .25, {backgroundColor: "#ffffff"});
            TweenMax.set(cta_txt, {opacity: 1});
            TweenMax.set(cta_ovr_txt, {opacity: 0});
        });

    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl.to(curtain, .5, {opacity:0})
            .staggerFrom(circle, .5, {opacity: 0, repeat: 3, yoyo: true, delay: 0.25}, 0.25)
            .from(bubble, .75, {height: 53, width: 99, ease: Elastic.easeOut.config(.3, .2)})
            .to(txt1, .5, {opacity: 1, y: "-=10", x: "+=10", ease: Elastic.easeOut.config(.5, .2)}, "-=.7")
            .to(cta, .5, {opacity: 1}, "-=.75");
    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
