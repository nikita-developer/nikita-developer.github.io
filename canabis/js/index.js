
$(document).ready(function() {
    $('#date').data('datepicker');
    Start();

    function Start() {
        var h = 0;
        var m = 12;
        var s = 0;

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;
                } else {
                    if (h != 0) {
                        h = h - 1;
                        m = 59;
                        s = 59;
                    } else {
                        return
                    }
                }
            }
            $('.form__count-item:first-child span:first-child').text(h);
            $('.form__count-item:nth-child(2) span:first-child').text(m);
            $('.form__count-item:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000)
    }

    /*init smoke*/
    init()

    var $count = 0;
    $('.look__amulets-item').click(function () {

        if ($count == 0) {
            if ( $('.look__data-call input').val() == 0 || $('.look__data-call input').val() == "" ) {
                $('.look__data-call').addClass('look__data-call_active')
            } else {
                $count = 1;
                $('.look__amulets-item').removeClass('look__amulets-item_active');
                $(this).addClass('look__amulets-item_active');
                $('.js-popup-look').fadeToggle();
                $('.look__data-call').removeClass('look__data-call_active')
            }
            console.log(1);
        } else {
            $('.popup-look__title').text('Вы уже выиграли скидку')
            $('.popup-look__description').text('Заказывайте скорее!')
            $('.look__amulets-item').removeClass('look__amulets-item_active');
            $(this).addClass('look__amulets-item_active');
            $('.js-popup-look').fadeToggle();
            $('.look__data-call').removeClass('look__data-call_active')
            console.log(2);
        }

    });

    $('.popup-look__close').click(function () {
        $('.js-popup-look').fadeToggle();
    })

});
