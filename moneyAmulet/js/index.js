
$(document).ready(function() {
    $('.form__field').focus( function() {
        $(this).addClass('form__field_active')
    }).blur(function () {
        if ( $(this).val() == "") {
            $(this).removeClass('form__field_active')
        }
    })
});
