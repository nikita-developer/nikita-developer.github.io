
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

    /*добавляем и форматируем дату*/
    function formatDate(date) {
        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;
        return dd + '.' + mm + '.' + yy;
    }

    var d = new Date();
    d.setDate(d.getDate() - 30);
    $('.warning__info span').text(formatDate(d));
});
