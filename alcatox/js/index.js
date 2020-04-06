
$(document).ready(function() {
    /* Добавил прикольную анимашку на input блока form */
    $('.form__field').focus( function() {
        $(this).addClass('form__field_focus')
    }).blur(function () {
        if ( $(this).val() == "") {
            $(this).removeClass('form__field_focus')
        }
    })

    /* Таймер */

    var clock = $('.timer__count').FlipClock({
        clockFace: 'DailyCounter',
        language: 'ru',
        HourlyCounter: false,
        countdown: true
    })

    clock.setTime($('.timer__count').data('time'));
    clock.setCountdown(true);
    clock.start();
});
