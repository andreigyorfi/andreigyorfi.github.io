//
// App.js
//
// Contents:
//
// Headroom
// Mobile menu
//





// Headroom

$(".header").clone().appendTo("#headroom");

$("#headroom").headroom({
    offset: 600,
    tolerance: {
        up: 30,
        down: 0
    }
});





//
// Mobile menu
//

$(".mobile-menu-button").click(function() {
  $("body").addClass("menu-open");
  $(".mobile-menu").fadeIn(250);
});

$(".mobile-menu-close").click(function() {
  $("body").removeClass("menu-open");
  $(".mobile-menu").fadeOut(250);
});





//
// Scroll Reveal
//

// window.sr = ScrollReveal();
// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });
