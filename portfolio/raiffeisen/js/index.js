
$(document).ready(function(){
  $('.js-nav').on('click', 'a', function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 69
    $('body,html').animate({scrollTop: top}, 300)
    $('.nav__item').removeClass('nav__item_active')
    $(this).parent().addClass('nav__item_active')
  })

  var header = $('.header').outerHeight()
  $(document).on("scroll", window, function () {
    if ($(window).scrollTop() > header) {
        $('.js-nav').addClass('nav_active')
    } else {
        $('.js-nav').removeClass('nav_active')
    }
  })

  $('.header__burger').click(function () {
    $(this).toggleClass('header__burger_active')
    $('.js-nav').toggleClass('nav_active-mobile')
  })

  $('.nav').on('click', '.nav__item a', function () {
    $('.js-nav').removeClass('nav_active-mobile')
    $('.header__burger').removeClass('header__burger_active')
  })

  $(document).mouseup(function (e){
		var div = $('.js-nav')
		var div2 = $('.header__burger')
		if (!div.is(e.target) && div.has(e.target).length === 0 && !div2.is(e.target) && div2.has(e.target).length === 0) {
			div.removeClass('nav_active-mobile')
      $('.header__burger').removeClass('header__burger_active')
		}
	});
})
