
$(document).ready(function () {
  // https://wowjs.uk/
  new WOW().init();

  // Вызов owl-carousel
  $('.js-myWorks').owlCarousel({
    loop: true,
    margin: 32,
    items: 3,
    responsive: {
      0 : {
        items: 1,
      },
      // breakpoint from 480 up
      576 : {
        items: 2,
      },
      // breakpoint from 768 up
      768 : {
        items: 3,
      },
    },
  });
})
