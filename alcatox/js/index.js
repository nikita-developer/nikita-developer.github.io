
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
    for (var i = 0; i < $('.timer__count').length; i++) {
        var clock = $('.timer__count').eq(i).FlipClock({
            clockFace: 'DailyCounter',
            language: 'ru',
            HourlyCounter: false,
            countdown: true
        })
        clock.setTime($('.timer__count').eq(i).data('time'));
        clock.setCountdown(true);
        clock.start();
    }

    /*Слайдер*/
    $('.js-commits__slide').owlCarousel({
        loop: true,
        margin: 10,
        autoHeight: true,
        items: 1,
        responsive : {
            481 : {
                nav: true,
            }
        }
    });

    /* Анимация */
    wow = new WOW({
        mobile: false
    })
    wow.init();
});
