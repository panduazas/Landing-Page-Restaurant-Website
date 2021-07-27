$('#slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$('#testimonial').owlCarousel({
  loop: true,
  center: true,
  item: 3,
  margin: 0,
  autoplay: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});
