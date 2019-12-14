
$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true
  })

  $('.product__tab-item').click(function () {
    var indexTab = $(this).index()
    $('.product__tab-item').removeClass('product__tab-item_active')
    $(this).addClass('product__tab-item_active')
    $('.catalog').removeClass('catalog_active')
    $(this).parents('body').find('.catalog').eq(indexTab).addClass('catalog_active')
  })

});
