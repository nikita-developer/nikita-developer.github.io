
$(document).ready(function() {
    $('.header__nav-burger').click(function () {
        $('.header__nav-body').toggleClass('header__nav-body_active');
        $(this).toggleClass('header__nav-burger_active');
    })
});
