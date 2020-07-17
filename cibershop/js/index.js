
$(document).ready(function() {
    $('.header__nav-burger').click(function () {
        $('.header__burger').addClass('header__burger_active')
        $('.header__nav-body').addClass('header__nav-body_active');
        $(this).addClass('header__nav-burger_active');
        $('body, html').css('overflow', 'hidden');
    })

    $('.header__burger').mouseup(function (e) {
		if (!$('.header__nav-body').is(e.target) && $('.header__nav-body').has(e.target).length === 0) {
            $('.header__burger').removeClass('header__burger_active')
            $('.header__nav-body').removeClass('header__nav-body_active');
            $('.header__nav-burger').removeClass('header__nav-burger_active');
            $('body, html').css('overflow', 'visible');
		}
	});

    $('.face').owlCarousel({
        loop: true,
        margin: 0,
        autoHeight: true,
        items: 1
    });

    if ($(window).width() <= 1024) {
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
    };

    $(window).resize(function(){
        if ($(window).width() <= 1024) {
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
        };
    });
});
