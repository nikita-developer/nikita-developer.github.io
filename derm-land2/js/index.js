
$(document).ready(function() {
    AOS.init({
        startEvent: 'load',
        offset: 60
    });

    $('.mistakes__item').click(function() {
        $(this).children('.mistakes__body').toggleClass('mistakes__body_hide');
    })

    $('.form__field').focus( function() {
        $(this).addClass('form__field_active')
    }).blur(function () {
        if ( $(this).val() == "") {
            $(this).removeClass('form__field_active')
        }
    })

    $('.js-commits__box').owlCarousel({
        loop: true,
        margin: 20,
        autoHeight: true,
        responsive : {
            320 : {
                items: 1,
                nav: true
            },

            768 : {
                items: 2,
                nav: false
            },

            960 : {
                items: 3
            }
        }
    });

    var slider = $('.step__body');
    if ($(window).width() <= 480) {
        slider.owlCarousel({
            loop: true,
            margin: 20,
            autoHeight: true,
            items: 1
        });
    }

    $(window).resize(function () {
        if ($(window).width() > 380) {
            slider.owlCarousel('destroy')
        } else {
            slider.owlCarousel({
                loop: true,
                margin: 20,
                autoHeight: true,
                items: 1
            });
        }
    })

    // var slider = $('.step__body');
    // var sld = function() {
    //     if ($(window).width() < 480) {
    //         slider.bxSlider({
    //             auto: true,
    //             pause: 2000,
    //             autoHover: true
    //         });
    //         console.log(1);
    //     } else {
    //         slider.destroy();
    //     }
    // };

    // sld();
    // $(window).resize(sld);

    Start();
    function Start() {
        var m = 22,
            s = 0;

        if (m <= 9) {
            m = "0" + m;
        };

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }
            }

            $('.form__time-count:nth-of-type(2) span:first-child').text(m);
            $('.form__time-count:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    }

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 600);
});
