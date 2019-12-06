
$(document).ready(function() {
  $('.crop__btn').click(function () {
    $('.crop').fadeOut()
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

  $('.js-jobOpenings_nav').owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    items: 3,
    stagePadding: 14,
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

  $('.js-jobOpenings').owlCarousel({
    doth: true,
    loop: true,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    slideBy: 3,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        margin: 16
      },
      768: {
        items: 2,
      },
      980: {
        items: 3,
      }
    }
  })

  $('.nav').on('click', '.nav__link_jak', function (e) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
    $('.navOpen').removeClass('navOpen_active')
    $('.nav').removeClass('nav_show')
    $('html').removeClass('hideScroll')
  })
  $('.js-navOpen').click(function () {
    $('.navOpen').toggleClass('navOpen_active')
    $('.nav').toggleClass('nav_show')
    $('html').toggleClass('hideScroll')
  })

  $('.js-oculus').click(function () {
    $(this).toggleClass('oculus_active')
    if($(this).hasClass('oculus_active')) {
      $(this).parent().children('input[type="password"]').attr('type', 'text')
    } else {
      $(this).parent().children('input[type="text"]').attr('type', 'password')
    }
  })

  $('.js-openCropper').click(function () {
    $('.crop').fadeIn()
    $('.crop__img').cropper({
      preview: '.crop__result-img',
      aspectRatio: 1,
      viewMode: 1,
      ready: function () {
        croppable = true;
      }
    });
  })

  $('.js-partnersSlide').owlCarousel({
    loop: true,
    doth: true,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive : {
        0 : {
          items: 2,
        },
        768 : {
          items: 3,
        }
    }
  })

  $('.popap').on('click', '.addSummary__label', function () {
    if ($(this).children('span').text() == 'Работодатель') {
        $('.js-popap__title').html('<div class="popap__title js-popap__title">Заполните простую форму и получите<br><span>море классных откликов</span></div>')
    } else {
        $('.js-popap__title').html('<div class="popap__title js-popap__title">Привет, заполни простую форму и получишь <span>море классных вакансий</span></div>')
    }
  });

  var nav = $('.progressBar-container');
  var hints = $('.hints');
  $(window).scroll(function () {
    var height = $('.section_inner').outerHeight() + parseInt($('.section_f5f7f6').css('paddingTop'));
    if ($(this).scrollTop() > height) {
      nav.addClass('progressBar-container_fixe')
      $('.js-boxAside').css('paddingTop', nav.outerHeight() + 'px')
    } else {
      nav.removeClass('progressBar-container_fixe');
      $('.js-boxAside').css('paddingTop', '0px')
    }
    var $height = $('.section_inner').outerHeight() + $('.profile__container_aside').outerHeight();
    if ($(this).scrollTop() > $height) {
      hints.addClass('hints_scroll')
      hints.css('top', + $('.progressBar-container_fixe').outerHeight() + 32 +'px')
    } else {
      hints.removeClass('hints_scroll')
      hints.css('top', '0')
    }
  })

  $('.js-request__field').keyup(function() {
    if ($(this).val().length > 0 || $(this).val().length > " ")
      $('.request__field_hide').fadeIn()
    else
      $('.request__field_hide').fadeOut()
  })

  $('.tariffs__item_hover').click(function () {
    $('.tariffs__item_hover').not($(this)).removeClass('tariffs__item_active')
    $(this).addClass('tariffs__item_active')
  })

  $('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  })

  new WOW().init();

  var $section = $('.js-section')
  if($section.length > 0) {
    var footer = $('.js-section').offset().top - $(document).scrollTop()
    if (footer <= $(window).height()) {
      $('.jak').css('top', footer - 70 + 'px')
    } else {
      $('.jak').css('top', 'calc(100% - 70px)')
    }

    $(window).scroll(function() {
      footer = $('.js-section').offset().top - $(document).scrollTop()
      if (footer <= $(window).height()) {
        $('.jak').css('top', footer - 70 + 'px')
      } else {
        $('.jak').css('top', 'calc(100% - 70px)')
      }
    })

    $('.jak').click(function() {
      $('html, body').animate({scrollTop: 0},500);
      return false;
    })
  }

  $('body').click(function (e){
		var div = $('.nav');
		var div2 = $('.js-navOpen');
		if (!div.is(e.target) && div.has(e.target).length === 0 && !div2.is(e.target) && div2.has(e.target).length === 0) {
      $('.navOpen').removeClass('navOpen_active')
      $('.nav').removeClass('nav_show')
      $('html').removeClass('hideScroll')
		}
  });

  if($('.js-profileMenu__list').length > 0) {
    $('.js-profileMenu__icon').click(function (){
      $('.js-profileMenu__list').toggleClass('profileMenu__list_active')
    })
    $(document).click(function (e){
      var div = $('.js-profileMenu__list');
      var div2 = $('.js-profileMenu__icon');
      if (!div.is(e.target) && div.has(e.target).length === 0 && !div2.is(e.target) && div2.has(e.target).length === 0) {
        $('.js-profileMenu__list').removeClass('profileMenu__list_active')
      }
    });
  }
})

