
$(document).ready(function() {
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
        responsive : {
            320 : {
                items: 1,
                autoHeight: true,
            },

            768 : {
                items: 2,
            },

            960 : {
                items: 3,
                autoHeight: false,
            }
        }
    });

    $('.secret__btn').on( 'click', function() {
        var dest = $('.face__box_form');
        if(dest !== undefined && dest !== '') {
            $('html').animate({
                scrollTop: $(dest).offset().top
            }, 500);
        }
        return false;
    });
});
