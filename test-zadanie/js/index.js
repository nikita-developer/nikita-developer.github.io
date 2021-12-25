$(document).ready(function () {
    // бургер меню
    $('.js-nav__burger').click(function () {
        $('.js-nav__body').toggleClass('visible');
        $('html, body').toggleClass('overflow');
    });

    // стилизация select
    $('select, input[type="file"]').styler();

    // подставляем значение ползунка
    $('.js-form__info span').text($('.js-form__range').val() + '%');

    var range = document.querySelector('.js-form__range');
    range.addEventListener('input', function () {
        $('.js-form__info span').text($(this).val() + '%');
    }, false);
});