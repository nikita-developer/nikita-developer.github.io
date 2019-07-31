
$(document).ready(function() {
  var $language = ["Action Script", "C++/CLI", "C++", "ColdFusion", "Delphi",
			      "Java", "Objective-C", "JavaScript", "Python", "Visual Basic"];

    $('.language__addItem').autocomplete({
        source: $language
    })

    $('button').click(function() {
      var $val = $('.language__addItem').val();
      if (!$val == '') {
        $('.language').prepend('<div class="language__item">' + $val + ' <span class="close">x</span></div>');
        $('.language__addItem').val('');
      }
    });

    $('.language').on('click', '.close',function () {
      $(this).parent().remove();
    })

});
