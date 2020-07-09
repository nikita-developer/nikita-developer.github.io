window.onload = function () {

    var btn = document.getElementById('ryle__look'),
        discount = document.getElementById('ryle__discount'),
        ryle = document.getElementById('ryle'),
        close = document.getElementById('ryle__close'),
        box = document.getElementById('js-formRyle'), /* id вешаешь на форму*/
        media = document.getElementById('ryle__media'),
        boxTop = box.getBoundingClientRect().top,
        min = document.getElementById('all-form__min'),
        sec = document.getElementById('all-form__sec');

    /* расстояние формы от края верхней границы окна (при загрузке) */

    if (boxTop <= 300) {
        openRyle();
    }

    /* расстояние формы от края верхней границы окна (при скролле)*/
    window.onscroll = function () {
        if (box.getBoundingClientRect().top <= 300) {
            openRyle();
        }
    };

    /* функция которая показывает рулетку */
    function openRyle() {
        // вешаем класс
        ryle.classList.add('ryle_active');
    }

    /* запускаем вращение барабана */
    btn.onclick = function () {
        media.classList.add('ryle__media_active');
        setTimeout(function () {
            discount.classList.add('ryle__discount_active');
        }, 5000);
    };

    /* закрываем а после удаляем блок с рулеткой */
    close.onclick = function () {
        ryle.classList.remove('ryle_active',
            setTimeout(function () {
                ryle.parentNode.removeChild(ryle);
            }, 1000)
        );
        showForm();
    };

    /*функция показывает форму*/
    function showForm() {
        box.classList.add('all-form_active');
        start(min, sec);
    }

    /*таймер для формы*/
    function start(min, sec) {
        var date = new Date(),
            count = 0;
        date.setMinutes(10);
        date.setSeconds(0);
        min.textContent = zero(date.getMinutes());
        sec.textContent = zero(date.getSeconds());

        var interval = setInterval(counter, 1000);

        function counter() {
            count++;
            var liveDate = new Date();
            liveDate.setMinutes(date.getMinutes());
            liveDate.setSeconds(date.getSeconds() - count);

            min.textContent = zero(liveDate.getMinutes());
            sec.textContent = zero(liveDate.getSeconds());
            if (min.textContent === '00' && sec.textContent === '00') {
                clearInterval(interval);
            }
        }

        function zero(num) {
            return num.toString().length === 1 ? '0' + num : num;
        }
    }
};
