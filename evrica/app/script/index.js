
$(document).ready(function() {
  $(".calculator__polzunok").slider({
    animate: "slow",
    range: true,
    values: [ 0, 65 ],
    max: 65,
    step: 1,
    slide : function(event, ui) {
      $(".ui-slider-handle:nth-child(2)").text( "< от " + ui.values[ 0 ] + " >");
      $(".ui-slider-handle:last-child").text( "< до " + ui.values[ 1 ] + " >");
    }
  });
  $('.ui-slider-handle:nth-child(2)').text('< от ' + $(".calculator__polzunok").slider("values", 0) + " >")
  $('.ui-slider-handle:last-child').text('< до ' + $(".calculator__polzunok").slider("values", 1) + " >")

  var heightLabel = $('.houses__item_active').next().position().top;
  var widthLabel = $('.houses__item_active').next().position().left;
  var widthItem = $('.houses__item:first-child').innerWidth();

  $('.houses__item_active').children('.houses__arrow').css('top', heightLabel -35);
  $('.houses__item_active').css('marginLeft', widthLabel - widthItem -110);

  $('.js-houses__label').click(function() {
    heightLabel = $(this).position().top;
    widthLabel = $(this).position().left;
    widthItem = $(this).prev('.houses__item').innerWidth();

    $(this).prev('.houses__item').children('.houses__arrow').css('top', heightLabel -35);
    $(this).prev('.houses__item').css('marginLeft', widthLabel - widthItem -110);
    $('.houses__item').hide().removeClass('houses__item_active');
    $(this).prev('.houses__item').fadeIn().addClass('houses__item_active');
  })

  $('.houses__close').click(function() {
    var heightItem = $(this).parent('.houses__item').outerHeight();
    $('.houses').height(heightItem);
    $(this).parent().hide();
  })

  // $('.js-author__close').click(function() {
  //   $(this).parent().parent().fadeOut();
  // });
})
