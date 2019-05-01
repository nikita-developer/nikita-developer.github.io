
$(document).ready(function() {
  $('.js-product__nav').on('click', '.product__nav-item', function() {
    var $indexNav = $(this).index()
    $(this).parent().children('.product__nav-item').removeClass('product__nav-item_active')
    $(this).addClass('product__nav-item_active')
    $(this).closest('.product').find('.product__box').removeClass('product__box_active')
    $(this).closest('.product').find('.product__box').fadeOut(0, function() {
      $(this).closest('.product').find('.product__box').eq($indexNav).stop().fadeIn(300)
    })
  })
})
