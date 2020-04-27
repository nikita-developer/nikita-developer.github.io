
$(document).ready(function() {
    $('.form__field').focus( function() {
        $(this).addClass('form__field_active')
    }).blur(function () {
        if ( $(this).val() == "") {
            $(this).removeClass('form__field_active')
        }
    })

    $('.commit__description').liTextLength({
        length: 150,
        afterLength: '...',
        fullText:true,
        moreText: 'Подробнее',
        lessText: 'Скрыть'
    });
});
