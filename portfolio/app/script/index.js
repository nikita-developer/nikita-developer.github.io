
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
  })

  //scroll boot
  $('.js-header__scrollBot').click(function (even) {
      even.preventDefault();
      var $height = $('.face').height();
      $('html, body').animate({scrollTop:$height}, 500);
  })

  //nav scrollTop
  $('.nav a').on('click', function menuSroll() {
    const scrollAnchor = $(this).attr('data-scroll')
    const scrollPoint = $(`section[data-anchor="${scrollAnchor}"]`).offset().top
    $('body,html').animate({
      scrollTop: scrollPoint - 71,
    }, 500)
    return false
  })

  $(window).scroll(() => {
    const windscroll = $(window).scrollTop()
    if($('.face').height() <= windscroll) {
      $('.nav__burger').addClass('nav__burger_black')
    } else {
      $('.nav__burger').removeClass('nav__burger_black')
    }
    $('section').each(function $this(i) {
      if ($(this).offset().top <= windscroll - 400) {
        $('.nav a').removeClass('nav__link_active')
        $('.nav a').eq(i).addClass('nav__link_active')
      }
    })
  }).scroll()

  //nav open
  $('.js-nav__burger').click(function() {
    $(this).parent().toggleClass('nav_active')
  })

  $('.nav__link').click(function() {
    $(this).parent().toggleClass('nav_active')
  })
})
