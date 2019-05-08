
$(document).ready(function() {
  $('.js-nav__burger').click(function () {
    $('.nav').toggleClass('nav_open')
  })

  $('.js-slideGallery').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['', ''],
    margin: 30,
    responsive: {
      0 : {
        items: 1,
      },
      576 : {
        items: 2,
      },
      768 : {
        items: 3,
      },
      992 : {
        items: 4,
      },
    },
  })

  $('.js-face__box').on('click', '.face__tabTitle', function() {
    var $indexNav = $(this).index()
    $('.face__tabTitle').removeClass('face__tabTitle_active')
    $(this).addClass('face__tabTitle_active')
    $(this).closest('.face').find('.face__boxText').hide(0, function() {
      $('.face').find('.face__boxText').eq($indexNav).stop().show(0)
    })
  })

  $('.js-productForm').on('click', '.productForm__item', function () {
    $('.productForm__item').removeClass('productForm__item_active')
    $(this).addClass('productForm__item_active')
  })

  $('.js-productTape').on('click', '.productTape__item', function () {
    $('.productTape__item').removeClass('productTape__item_active')
    $(this).addClass('productTape__item_active')
  })

  $('.js-quantity').on('click', '.quantity__step_prev', function () {
    var $nomber = +$('.quantity__nomber span').text()
    $('.quantity__nomber span').text($nomber - 1)
  })

  $('.js-quantity').on('click', '.quantity__step_next', function () {
    var $nomber = +$('.quantity__nomber span').text()
    $('.quantity__nomber span').text($nomber + 1)
  })
})
