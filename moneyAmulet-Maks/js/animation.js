(function animation(item, help, ufo) {
    window.addEventListener('scroll', function () {
        var helpBlock = window.pageYOffset + help[0].getBoundingClientRect().top,
            windowHeight = document.documentElement.clientHeight, /*высота окна */
            visibleBottom = window.pageYOffset + windowHeight - 200; /* нижняя граница окна */

        for (var i = 0; i < item.length; i++) {
            var itemTop = window.pageYOffset + item[i].getBoundingClientRect().top;
            if (visibleBottom > itemTop) { /*если нижняя граница окна ниже элемента */
                if (i % 2 !== 1) {
                    item[i].classList.add('animation-moveLeft');
                    item[i].style.opacity = '1';
                } else {
                    item[i].classList.add('animation-moveRight');
                    item[i].style.opacity = '1';
                }
            }
        }

        if (visibleBottom > helpBlock) { /*если нижняя граница окна ниже элемента */
                ufo[0].classList.add('animation-ufo');
        }

    }, false);
})(
    document.getElementsByClassName('stop-item'),
    document.getElementsByClassName('help'),
    document.getElementsByClassName('ufo')
);
