
$(document).ready(function() {
    AOS.init({
        startEvent: 'load',
        offset: 60
    });

    $('.section__slider').owlCarousel({
        loop: true,
        margin: 30,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },
        }
    });
});
