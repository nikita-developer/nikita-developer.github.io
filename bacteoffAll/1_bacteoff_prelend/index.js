window.onload = function() {
    /*
            КОММЕНТАРИИ
            ===================================================================>
            ХОТИМ ДОБАВИТЬ БЛОК КОММЕНТОВ
            ===================================================================>
            вызываем функцию addCommits('minTime');
            в параметры передаем формат даты (какие есть форматы описано ниже)
            если нужно установить дату на публикацию поста можно просто навесить класс commits__date
            ХОТИМ ДОБАВИТЬ ДАТУ
            ===================================================================>
            запускаем функцию и указываем параметры
            time('className', 'format');
            PARAMETERS
            ===================================================================>
            className - указываем класс к которому хотим добавить дату
            format - указываем формат в кавычках ('fullTime')
            OPTIONS
            ===================================================================>
            fullTime   - дата в формате 00.00.0000
            minTime    - дата в формате 00.00.00
            year       - год
            month      - месяц
            day        - день
            day-month  - день и месяц
            day-year   - день и год
            month-year - месяц и год
        */

    time('className', 'minTime');
    time('datatime', 'minTime');

    /*комменты для сайта*/
    addCommits('fullTime');

    function addCommits(formatDate) {
        var $name = document.getElementById('myName'),
            $message = document.getElementById('myMessage'),
            $setName = document.getElementById('commits__name'),
            $setMessage = document.getElementById('commits__description'),
            $mySend = document.getElementById('mySend'),
            $sendMessage = document.getElementById('my-message'),
            $myMessage = document.getElementById('send-message');

        if (sessionStorage.getItem('commit') == 1) {
            $myMessage.classList.add('commits__item_hide');
            $sendMessage.classList.remove('commits__item_hide');
            $setName.innerHTML = sessionStorage.getItem('name');
            $setMessage.innerHTML = sessionStorage.getItem('message');
        }
        $mySend.onclick = function() {
            if ($name.value == 0 || $name.value == "") {
                $name.classList.add('commits_error');
                if ($message.value == 0 || $message.value == "") {
                    $message.classList.add('commits_error');
                } else {
                    $message.classList.remove('commits_error');
                }
            } else {
                $name.classList.remove('commits_error');
                if ($message.value == 0 || $message.value == "") {
                    $message.classList.add('commits_error');
                } else {
                    $message.classList.remove('commits_error');
                    sessionStorage.setItem('name', $name.value);
                    sessionStorage.setItem('message', $message.value);
                    sessionStorage.setItem('commit', 1);
                    $myMessage.classList.add('commits__item_hide');
                    $sendMessage.classList.remove('commits__item_hide');
                    $setName.innerHTML = sessionStorage.getItem('name');
                    $setMessage.innerHTML = sessionStorage.getItem('message');
                }
            }
        }
        addDate('commits__date', formatDate);
    }

    /*проверка на заполненность полей*/


    /*вешаем дату на любой класс*/
    function time(className, format) {
        var elem = document.getElementsByClassName(className),
            d = new Date(),
            $thisDate = formatDate(d, format);

        for (var i = 0; i < elem.length; i++) {
            elem[i].innerHTML = $thisDate;
        }
    }

    /*вешаем дату на комметарии*/
    function addDate(className, formatData) {
        var $date = document.getElementsByClassName(className);
        var dataPost = document.getElementById('dataPost');
        for (var i = $date.length - 1; i >= 0; i--) {
            var d = new Date();
            d.setDate(d.getDate() - (($date.length - 1) - i));
            $date[i].innerHTML = formatDate(d, formatData);
            dataPost.innerHTML = formatDate(d, formatData);
        }
    }

    /*формат дат*/
    function formatDate(date, format) {
        var dd = date.getDate(),
            mm = date.getMonth(),
            yy = date.getFullYear();

        if (format == 'fullTime') {
            if (dd < 10) dd = '0' + dd;
            if (mm += 1 < 10) mm = '0' + mm;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + mm + '.' + yy;
        } else if (format == 'minTime') {
            if (dd < 10) dd = '0' + dd;
            if (mm += 1 < 10) mm = '0' + mm;
            if ((yy %= 100) < 10) yy = '0' + yy;
            return dd + '.' + mm + '.' + yy;
        } else if (format == 'year') {
            if (yy < 10) yy = '0' + yy;
            return yy;
        } else if (format == 'month') {
            if (mm += 1 < 10) mm = '0' + mm;
            return mm;
        } else if (format == 'day') {
            if (dd < 10) dd = '0' + dd;
            return dd;
        } else if (format == 'day-month') {
            if (dd < 10) dd = '0' + dd;
            if (mm += 1 < 10) mm = '0' + mm;
            return dd + '.' + mm;
        } else if (format == 'day-year') {
            if (dd < 10) dd = '0' + dd;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + yy;
        } else if (format == 'month-year') {
            if (mm += 1 < 10) mm = '0' + mm;
            if (yy < 10) yy = '0' + yy;
            return mm + '.' + yy;
        } else if (format == 'false') {
            return '';
        } else {
            if (dd < 10) dd = '0' + dd;
            if (mm += 1 < 10) mm = '0' + mm;
            if (yy < 10) yy = '0' + yy;
            return dd + '.' + mm + '.' + yy;
        };
    };

    
if ($('div').is('.ryle')) {
    /* показываем колесо при загрузке */
    if ($('.all-form').offset().top - $(this).scrollTop() - $(window).height() <= 120) {
        $('.ryle').addClass('ryle_active');
    };
    console.log($('.all-form').offset().top - $(this).scrollTop() - $(window).height());
    
    /* показываем колесо при скролле */
    $(window).on('scroll', function() {
        console.log($('.all-form').offset().top - $(this).scrollTop() - $(window).height());
        if (!$('.ryle').hasClass('thisEvent')) {
            if ($('.all-form').offset().top - $(this).scrollTop() - $(window).height() <= 120) {
                $('.ryle').addClass('ryle_active');
            }
        }
    })

    /* закрываем колесо, показываем форму, запускаем таймер и плавно скроллимся к форме */
    $('.ryle__close').click(function() {
        $('.ryle').removeClass('ryle_active').addClass('thisEvent');
        $('.all-form').fadeIn();
        Start();
        $('html, body').animate({
            scrollTop: $('.all-form').offset().top - $(window).height()
        }, 300);
    });

    /* крутим барабан и показываем инфу о скидке */
    $('.ryle__look').click(function() {
        $('.ryle__media').addClass('ryle__media_active');
        setTimeout(function() {
            $('.ryle__discount').addClass('ryle__discount_active');
        }, 5000);
    });
} else {
    Start()
}

function Start() {
    if (m <= 9) {
        m = "0" + m;
    }
    var m = 10,
        s = 0,
        min = $('.all-form__min'),
        sec = $('.all-form__sec');

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

        min.text(m);
        sec.text(s);
        timerId = setTimeout(tick, 1000);
    }, 1000);
}
};
