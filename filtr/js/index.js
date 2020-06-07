
$(document).ready(function() {
    var man = $('.avatar__checkbox[data-mwi="man"]').prop('checked'),
        woman = $('.avatar__checkbox[data-mwi="woman"]').prop('checked'),
        img = $('.avatar__checkbox[data-img="img"]').prop('checked'),
        $text = $('.jq-selectbox__select-text').text();

    var $grid = $('.grid').masonry({
        itemSelector: '.grid__item',
        columnWidth: 100,
        fitWidth: true,
        gutter: 10
    })

    checkAll();

    $('select, input').styler();

    $(window).scroll(function () {
        var $top = $(this).scrollTop();
        if($top > 0) {
            var $box = $('.avatar__header');
            $box.addClass('avatar__header_fixed');
            $('.avatar__body').css('marginTop', $box.outerHeight());
        } else {
            $('.avatar__header').removeClass('avatar__header_fixed');
            $('.avatar__body').css('marginTop', 0);
        }
    })



    $('.jq-selectbox').on('click', '.avatar__item', function(){
        $('.grid__item').show();
        $text = $('.jq-selectbox__select-text').text();
        if($text !== 'Все') {
            $('.grid__item:not([data-type="'+$text+'"])').hide();
            $('.grid__item').removeClass('grid__item_active');
            $('.grid__item[data-type="'+$text+'"]').addClass('grid__item_active');
            checkAll();
        } else {
            $('.grid__item').removeClass('grid__item_active');
            $('.grid__item').addClass('grid__item_active');
            checkAll();
        }
    })

    $('.avatar__checkbox').change(function() {
        $('.grid__item').show();
        $text = $('.jq-selectbox__select-text').text();
        if($text !== 'Все') {
            $('.grid__item:not([data-type="'+$text+'"])').hide();
            $('.grid__item').removeClass('grid__item_active');
            $('.grid__item[data-type="'+$text+'"]').addClass('grid__item_active');
            checkAll();
        } else {
            $('.grid__item').removeClass('grid__item_active');
            $('.grid__item').addClass('grid__item_active');
            checkAll();
        }
    })

    function checkAll() {
        man = $('.avatar__checkbox[data-mwi="man"]').prop('checked');
        woman = $('.avatar__checkbox[data-mwi="woman"]').prop('checked');
        img = $('.avatar__checkbox[data-img="img"]').prop('checked');

        if(man == false) {
            $('.grid__item_active[data-mwi="man"]').hide()
        } else {
            $('.grid__item_active[data-mwi="man"]').show()
        }

        if(woman == false) {
            $('.grid__item_active[data-mwi="woman"]').hide()
        } else {
            $('.grid__item_active[data-mwi="woman"]').show()
        }

        if(img == false) {
            $('.grid__item_active[data-img="img"]').hide()
        } else {
            $('.grid__item_active[data-img="img"]').show()
        }

        if(man == false && woman == false) {
            $('.grid__item_active[data-mwi="woman"]').hide()
            $('.grid__item_active[data-mwi="man"]').hide()
        }

        if(man == false && woman == false && img == false) {
            $('.grid__item').hide()
        }

        $grid.masonry('layout');
    }
});
