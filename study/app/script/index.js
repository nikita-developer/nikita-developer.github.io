
$(document).ready(function() {
  $('.partnersSlide-js').owlCarousel({
    loop: true,
    doth: true,
    responsive : {
        0 : {
          items: 2,
        },

        768 : {
          items: 3,
        }
    }
  })

  $('.js-jobOpenings').owlCarousel({
    doth: true,
    loop: true,
    items: 3,
    stagePadding: 7,
    margin: 30,
    responsive : {
        0 : {
          items: 1,
        },

        768 : {
          items: 3,
        }
    }
  })

  $('.js-articlesSlide').owlCarousel({
    loop: true,
    doth: true,
    items: 3,
    stagePadding: 15,
    margin: 30,
    responsive : {
        0 : {
          items: 1,
        },

        768 : {
          items: 3,
        }
    }
  })

  $('.js-navOpen').click(function () {
    $(this).toggleClass('navOpen_active');

    if ($('.nav').hasClass('nav_active')) {
      $('.nav').removeClass('nav_active')
      $('.nav').stop().animate({opacity: "0"}, 300, function(){
        $('.nav').css('display', 'none')
      })
    } else {
      $('.nav').toggleClass('nav_active')
      $('.nav').css('display', 'flex')
      $('.nav').stop().animate({opacity: "1"}, 300)
    }
    $('html body').toggleClass('hideScroll')
  })

})
