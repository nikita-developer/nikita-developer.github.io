
$(document).ready(function() {
  $('.js-burger').click(function() {
    $('.js-navigations').fadeToggle();
  })

  $('.navigations__box').on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top - 200}, 1000);
    });
    
    $('.js-popap__close').click(function() {
      $('.popap__wrap').fadeOut();
      $('body,html').css('overflow', 'auto');
    })

    $('.js-popap__open').click(function() {
      $('.popap__wrap').fadeIn();
      $('body,html').css('overflow', 'hidden');
    })
})
