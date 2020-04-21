
$(document).ready(function() {
    $('.form__field').focus( function() {
        $(this).addClass('form__field_focus')
    }).blur(function () {
        if ( $(this).val() == "") {
            $(this).removeClass('form__field_focus')
        }
    })

    var wow = new WOW
        ({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            scrollContainer: null
        }
    );
    wow.init();
});
