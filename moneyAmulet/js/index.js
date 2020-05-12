
$(document).ready(function() {
    $('.form__field').focus( function() {
        $(this).addClass('form__field_active')
    }).blur(function () {
        if ( $(this).val() == "") {
            $(this).removeClass('form__field_active')
        }
    })

    $('.js-commit__slide').owlCarousel({
        loop: true,
        responsive : {
            320 : {
                items: 1,
                autoHeight: true,
                margin: 40
            },

            768 : {
                items: 2,
                margin: 40
            },

            960 : {
                items: 3,
                autoHeight: false,
                margin: 30
            }
        }
    });
});
