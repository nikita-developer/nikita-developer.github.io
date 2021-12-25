$(document).ready(function () {
    $('.js-nav__burger').click(function () {
        $('.js-nav__body').toggleClass('visible');
        $('html, body').toggleClass('overflow');
    });

    $('select, input[type="file"]').styler();
});