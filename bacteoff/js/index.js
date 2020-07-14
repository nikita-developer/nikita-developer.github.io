
$(document).ready(function() {
    AOS.init({
        startEvent: 'load',
        offset: 60
    });

    $('.form__field').focus( function() {
        $(this).addClass('form__field_active')
    }).blur(function () {
        if ( $(this).val() == "") {
            $(this).removeClass('form__field_active')
        }
    })

    $('.js-commits__box').owlCarousel({
        loop: true,
        margin: 0,
        autoHeight: true,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },

            960 : {
                items: 3
            }
        }
    });

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

    $('.pain__pulse-media').hover(function() {
        clearInterval(itervalItem);
        $('.pain__item').children('.pain__pulse').children('.pain__pulse-line').removeClass('pain__pulse-line_active');
        $('.pain__item').children('.pain__head').css('opacity', '0');
        $(this).parent().children('.pain__pulse-line').addClass('pain__pulse-line_active');
        $(this).parents('.pain__item').children('.pain__head').css('opacity', '1');
    }, function() {
        startItem();
        $('.pain__item').children('.pain__pulse').children('.pain__pulse-line').removeClass('pain__pulse-line_active');
        $('.pain__item').children('.pain__head').css('opacity', '0');
    })

    var itervalItem;
    startItem();
    function startItem() {
        itervalItem = setInterval(function() {
            var $index = randomInteger(1, 6);
            $('.pain__item').children('.pain__pulse').children('.pain__pulse-line').removeClass('pain__pulse-line_active');
            $('.pain__item').children('.pain__head').css('opacity', '0');
            $('.pain__item').eq($index).children('.pain__pulse').children('.pain__pulse-line').addClass('pain__pulse-line_active');
            $('.pain__item').eq($index).children('.pain__head').css('opacity', '1');
        }, 3000);

        function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        }
    }
});
