//
// App.js
//
// Contents:
//
// Headroom.js
// Mobile menu
// Particles.js
//





//
// Headroom.js
//
// See: https://wicky.nillia.ms/headroom.js/
//

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
// Particles.js
//
// See: https://vincentgarreau.com/particles.js/
//

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.75,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 250
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);





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
