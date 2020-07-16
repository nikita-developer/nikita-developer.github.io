
$(document).ready(function() {
    $('.header__nav-burger').click(function () {
        $('.header__nav-body').toggleClass('header__nav-body_active');
        $(this).toggleClass('header__nav-burger_active');
    })

    $('.face').owlCarousel({
        loop: true,
        margin: 0,
        autoHeight: true,
        items: 1
    });

    $(window).scroll(function(){
        var height = $('.header__head').outerHeight();
        var navHeight = $('.header__nav').outerHeight();
        if ($(this).scrollTop() >= height) {
            $('.header__nav').addClass('header__nav_mobile');
            $('.section_face').css('margin-top', navHeight);
        } else {
            $('.header__nav').removeClass('header__nav_mobile');
            $('.section_face').css('margin-top', 0);
        }
    });
});
