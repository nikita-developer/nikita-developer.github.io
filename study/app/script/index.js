
$(document).ready(function() {
  $('.js-partnersSlide').owlCarousel({
    loop: true,
    doth: true,
    margin: 64,
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

  $('.js-jobOpenings_nav').owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    items: 3,
    stagePadding: 7,
    margin: 30,
    navText: ["<img src='http://satyr.io/50x50/red?delay=3g'>","<img src='http://satyr.io/50x50/red?delay=3g'>"],
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
    $('.filter__box').css('left', '-400px');

    if ($('.nav').hasClass('nav_active')) {
      $('.nav').removeClass('nav_active')
      $('.nav').stop().animate({opacity: "0"}, 300, function(){
        $('.nav').css('display', 'none')
      })
      $('.asideBar').removeClass('asideBar_active')
    } else {
      $('.nav').toggleClass('nav_active')
      $('.nav').css('display', 'flex')
      $('.nav').css('zIndex', '2')
      $('.nav').stop().animate({opacity: "1"}, 300)
    }
    $('html body').toggleClass('hideScroll')
  })

  $(document).click(function (e) {
    var container = $('.profileMenu');
    if (container.has(e.target).length === 0){
      $('.profileMenu').children('.profileMenu__list').fadeOut()
    } else {
      $('.profileMenu').children('.profileMenu__list').fadeIn()
    }
  })

  $('.js-portfolioCheck').click(function () {
    $(this).toggleClass('portfolioCheck_active')
  })

  $('.js-more').click(function () {
    if ($(this).text() == 'открыть') {
      $(this).prev().fadeIn()
      $(this).text('скрыть')
    } else {
      $(this).prev().hide()
      $(this).text('открыть')
    }
  })

  var $count = 0;

  $('.jobOpenings').on('click', '.js-jobOpenings__circle', function () {
    $('.js-menuJobOpenings').addClass('menuJobOpenings_active')

    if ($(this).parents('.jobOpenings__item').hasClass('jobOpenings__item_active')){
      $(this).parents('.jobOpenings__item').removeClass('jobOpenings__item_active')
      $count = $('.jobOpenings__item_active').length;
      $('.menuJobOpenings__count').text($count + ' выделено')
    } else {
      $(this).parents('.jobOpenings__item').addClass('jobOpenings__item_active')
      $count = $('.jobOpenings__item_active').length;
      $('.menuJobOpenings__count').text($count + ' выделено')
    }
  })

  $('.jobOpenings').on('click', '.menuJobOpenings__btn_close', function () {
    $('.js-menuJobOpenings').removeClass('menuJobOpenings_active')
    $('.jobOpenings__item').removeClass('jobOpenings__item_active')
  })

  $('.jobOpenings').on('click', '.menuJobOpenings__countAll', function () {
    $(this).parents('.jobOpenings').children('.jobOpenings__item').addClass('jobOpenings__item_active')
    $count = $('.jobOpenings__item_active').length;
    $('.menuJobOpenings__count').text($count + ' выделено')
  })

  $('.js-asideBar-open').click(function (e) {
    e.preventDefault()
    $('.asideBar').toggleClass('asideBar_active')
  })

  $('.asideBar__close').click(function () {
    $('.asideBar').toggleClass('asideBar_active')
  })

  $('.open_employer').click(function () {
    $(this).addClass('checkIn__tabs-item_active')
    $('.open_jobSeeker').removeClass('checkIn__tabs-item_active')
    $('.employer').stop().fadeIn()
    $('.jobSeeker').stop().fadeOut()
  })

  $('.open_jobSeeker').click(function () {
    $(this).addClass('checkIn__tabs-item_active')
    $('.open_employer').removeClass('checkIn__tabs-item_active')
    $('.jobSeeker').stop().fadeIn()
    $('.employer').stop().fadeOut()
  })

  $('.checkIn__callback-close').click(function () {
    $(this).parent().fadeOut()
  })

  $('.checkIn__callback-error').click(function () {
    $(this).parent().fadeOut()
  })

  $('.filter__category').click(function (e) {
    var $this = $(this).children('.filter__list')
    $('.filter__category').not($(this)).removeClass('filter__category_active')
    $('.filter__list').not($(this).children('.filter__list')).fadeOut()
    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
      if ($(this).hasClass('filter__category_active')) {
        $(this).removeClass('filter__category_active')
        $(this).children('.filter__list').fadeOut()
      } else {
        $(this).addClass('filter__category_active')
        $(this).children('.filter__list').fadeIn()
      }
    }
  })

  var $filterCount = 0
  $('.filter__list').on('click', '.filter__item', function () {
    $(this).children('.filter__checkbox').toggleClass('filter__checkbox_active')
    $filterCount = $(this).parents('.filter__list').find('.filter__checkbox_active').length
    if ($filterCount == 0) {
      $(this).parents('.filter__category').children('.filter__category-count').hide()
    } else {
      $(this).parents('.filter__category').children('.filter__category-count').show().text($filterCount)
    }
  })

  $('.js-filter__btn_reset').click(function (){
    $('.filter__category-count').hide()
    $('.filter__category').removeClass('filter__category_active')
    $('.filter__list').fadeOut()
    $('.filter__checkbox').removeClass('filter__checkbox_active')
    $filterCount = 0
  })

  $('.filter__box-close').click(function (){
    $(this).parents('.filter__box').css('left', '-400px');
  })

  $('.js-filter__btn_open').click(function (){
    $(this).parents('.filter').children('.filter__box').css('left', '0');
  })

  $('.filter__range').slider({
    range: true,
    step: 1000,
    min: 0,
    max: 200000,
    values: [0, 200000],
    slide: function(event, ui) {
      $('.filter__price1').val(ui.values[0]);
      $('.filter__price2').val(ui.values[1]);
    }
  });

  $('.filter__price1').val($('.filter__range').slider('values', 0));
  $('.filter__price2').val($('.filter__range').slider('values', 1));

  $('.filter__price1').change(function() {
    $('.filter__range').slider('values', 0, $(this).val());
  });
  $('.filter__price2').change(function() {
    $('.filter__range').slider('values', 1, $(this).val());
  });
})
