
$(document).ready(function () {
  // https://wowjs.uk/
  new WOW().init();

  // Вызов owl-carousel
  $('.js-myWorks').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 32,
    items: 3,
    navText: ['', ''],
    responsive: {
      0 : {
        items: 1,
      },
      768 : {
        items: 2,
      },
      992 : {
        items: 3,
      },
    },
  });
})
