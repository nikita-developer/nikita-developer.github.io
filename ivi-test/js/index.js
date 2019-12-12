
$(document).ready(function() {
  var count = 0;
  var dubl = 1;

  $('.ivi__item').mouseenter(function() {
    if (dubl == 1) {
      start ()
      dubl = 2
    }
    $('body').css('backgroundColor', 'blue')
  }).mouseleave(function (){
    $('body').css('backgroundColor', 'white')
  })

  function start () {
    count++
    if (count == 4) {
      $('.ivi__title').text('Go!')
      count = 0
      setTimeout(start, 1000)
    } else {
      $('.ivi__title').text(count)
      setTimeout(start, 1000)
    }
  }
});
