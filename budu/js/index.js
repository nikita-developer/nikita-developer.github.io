
$(document).ready(function() {
  var $lang = 1;
  var $langCount = 1;
  var $study = 1;
  var $studyCount = 1;
  var $skill = 1;
  var $skillCount = 1;
  var $portfolioLink = 1;

  new WOW().init();

  $('.js-partnersSlide').owlCarousel({
    loop: true,
    doth: true,
    margin: 64,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive : {
        0 : {
          items: 2,
        },

        768 : {
          items: 3,
        }
    }
  })

  $('.js-jobOpenings').owlCarousel({
    doth: true,
    loop: true,
    stagePadding: 16,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 8,
    responsive: {
      0: {
        items: 1,
        margin: 16
      },

      768: {
        items: 2,
      },

      980: {
        items: 3,
      }
    }
  })

  $('.js-jobOpenings_nav').owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    items: 3,
    stagePadding: 14,
    margin: 30,
    navText: ["<img src='http://satyr.io/50x50/red?delay=3g'>","<img src='http://satyr.io/50x50/red?delay=3g'>"],
    responsive : {
        0 : {
          items: 1,
        },

        768 : {
          items: 3,
        }
    }
  })

  $('.js-articlesSlide').owlCarousel({
    loop: true,
    doth: true,
    items: 3,
    stagePadding: 15,
    margin: 30,
    responsive : {
        0 : {
          items: 1,
        },

        768 : {
          items: 3,
        }
    }
  })

  $(document).click(function (e) {
    var container = $('.profileMenu');
    if (container.has(e.target).length === 0){
      $('.profileMenu').children('.profileMenu__list').fadeOut()
    } else {
      $('.profileMenu').children('.profileMenu__list').fadeIn()
    }
  })

  $('.js-portfolioCheck').click(function () {
    $(this).toggleClass('portfolioCheck_active')
  })

  $('.js-more').click(function () {
    if ($(this).text() == 'открыть') {
      $(this).prev().fadeIn()
      $(this).text('скрыть')
    } else {
      $(this).prev().hide()
      $(this).text('открыть')
    }
  })

  var $count = 0;

  $('.jobOpenings').on('click', '.js-jobOpenings__circle', function () {
    $('.js-menuJobOpenings').addClass('menuJobOpenings_active')

    if ($(this).parents('.jobOpenings__item').hasClass('jobOpenings__item_active')){
      $(this).parents('.jobOpenings__item').removeClass('jobOpenings__item_active')
      $count = $('.jobOpenings__item_active').length;
      $('.menuJobOpenings__count').text($count + ' выделено')
    } else {
      $(this).parents('.jobOpenings__item').addClass('jobOpenings__item_active')
      $count = $('.jobOpenings__item_active').length;
      $('.menuJobOpenings__count').text($count + ' выделено')
    }
  })

  $('.jobOpenings').on('click', '.menuJobOpenings__btn_close', function () {
    $('.js-menuJobOpenings').removeClass('menuJobOpenings_active')
    $('.jobOpenings__item').removeClass('jobOpenings__item_active')
  })

  $('.jobOpenings').on('click', '.menuJobOpenings__countAll', function () {
    $(this).parents('.jobOpenings').children('.jobOpenings__item').addClass('jobOpenings__item_active')
    $count = $('.jobOpenings__item_active').length;
    $('.menuJobOpenings__count').text($count + ' выделено')
  })

  $('.js-asideBar-open').click(function (e) {
    e.preventDefault()
    $('.asideBar').toggleClass('asideBar_active')
  })

  $('.asideBar__close').click(function () {
    $('.asideBar').toggleClass('asideBar_active')
  })

  $('.open_employer').click(function () {
    $(this).addClass('checkIn__tabs-item_active')
    $('.open_jobSeeker').removeClass('checkIn__tabs-item_active')
    $('.employer').stop().fadeIn()
    $('.jobSeeker').stop().fadeOut()
  })

  $('.open_jobSeeker').click(function () {
    $(this).addClass('checkIn__tabs-item_active')
    $('.open_employer').removeClass('checkIn__tabs-item_active')
    $('.jobSeeker').stop().fadeIn()
    $('.employer').stop().fadeOut()
  })

  $('.checkIn__callback-close').click(function () {
    $(this).parent().fadeOut()
  })

  $(function() {
    var handle = $('.filter__range-text');
    $('.filter__range').slider({
      create: function() {
        handle.text($(this).slider("value"));
      },
      min: 0,
      max: 200000,
      slide: function(event, ui) {
        handle.text(ui.value);
      }
    });
  });

  // $('.js-form__range').slider({
  //   range: true,
  //   step: 1000,
  //   min: 0,
  //   max: 200000,
  //   values: [$range3 , $range4],
  //   slide: function(event, ui) {
  //     $('.form__field_min').val(ui.values[0]);
  //     $('.form__field_max').val(ui.values[1]);
  //   }
  // });
  //
  // $('.form__field_min').val($('.js-form__range').slider('values', 0));
  // $('.form__field_max').val($('.js-form__range').slider('values', 1));
  //
  // $('.form__field_min').change(function() {
  //   $('.js-form__range').slider('values', 0, $(this).val());
  // });
  // $('.form__field_max').change(function() {
  //   $('.js-form__range').slider('values', 1, $(this).val());
  // });

  $( ".profileForm__autocompleteInput" ).autocomplete({
    source: function(request, response) {
  		var $val = $('.profileForm__autocompleteInput').val();
        $.ajax({
          url: "../../../ajax.php",
		      type: "POST",
          data: {"getSkills": 1, "str": $val},
          success: function(data) {
            data = JSON.parse(data);
            response($.map(data, function(item){
              return {
                  label: item,
                  value: item
                }
              }));
            }
          });
        },
      minLength: 1
    });

  $('.js-formNoEnter').keydown(function(e) {
    if (event.keyCode == 13) {
      console.log(1);
      e.preventDefault();
      return false;
    }
  })

  $('.profileForm__autocompleteLabel').on('keyup', '.profileForm__autocompleteInput', function(e) {
    if(e.keyCode === 13) {
      e.preventDefault()
      var $val = $.trim($(this).val())
      if ($val.length == 0 || $(this).val() == ' ') {
        $(this).val('')
      } else {
        $('.profileForm__autocompleteBox').append('<div class="profileForm__autocompleteSkills js-profileForm__autocompleteSkills">'+ $val +'</div>')
        $('.profileForm__arrayLangSelect').append('<option>' + $val + '</option>')
        $('.profileForm__arrayLangSelect').find('option').remove()
        $('.profileForm__autocompleteSkills').each(function (index, value) {
          $('.profileForm__arrayLangSelect').append('<option selected value="' + $(this).text() + '">' + $(this).text() + '</option>')
        });
        $(this).val('')
      }
    }
  })

  $('.profileForm__autocompleteLabel').on('click', '.js-profileForm__autocompleteAdd', function(e) {
    var $val = $.trim($('.profileForm__autocompleteInput').val())
    if ($val.length == 0 || $(this).val() == ' ') {
      $(this).val('')
    } else {
      $('.profileForm__autocompleteBox').append('<div class="profileForm__autocompleteSkills js-profileForm__autocompleteSkills">'+ $val +'</div>')
      $('.profileForm__arrayLangSelect').append('<option>' + $val + '</option>')
      $('.profileForm__arrayLangSelect').find('option').remove()
      $('.profileForm__autocompleteSkills').each(function (index, value) {
        $('.profileForm__arrayLangSelect').append('<option selected value="' + $(this).text() + '">' + $(this).text() + '</option>')
      });
      $('.profileForm__autocompleteInput').val('')
    }
  })


  $('.profileForm__autocompleteBox').on('click', '.js-profileForm__autocompleteSkills', function () {
    $(this).remove()
    $('.profileForm__arrayLangSelect').find('option').remove()
    $('.profileForm__autocompleteSkills').each(function (index, value) {
      $('.profileForm__arrayLangSelect').append('<option selected value="' + $(this).text() + '">' + $(this).text() + '</option>')
    });
  })

  $('.profileForm__phone').mask('+7 000-000-00-00')

  $('.profileForm__openFio').change(function () {
    $('.profileForm__fio').toggleClass('profileForm__fio_active')
  })

  $('.infoSummary').on('click', '.js-form__item-add_lang', function () {
    $lang++
    $langCount++
    $(this).parents('.form__item').after('<div class="form__item form__item_active"><div class="form__item-title">Язык</div><div class="form__item-intro">Укажите язык</div><div class="form__btnAddForm"></div><label class="form__label form__label_textCenter"><select class="form__select" name="language'+ $lang +'"><option value="1">азербайджанский</option><option value="2">аккадский</option><option value="3">албанский</option><option value="4">английский</option><option value="5">арабский</option><option value="6">армянский</option><option value="7">африкаанс</option><option value="8">ацтекский</option><option value="9">белорусский</option><option value="10">болгарский</option><option value="11">венгерский</option><option value="12">венетский</option><option value="13">вьетнамский</option><option value="14">голландский</option><option value="15">грузинский</option><option value="16">датский</option><option value="17">иврит</option><option value="18">еврейский (идиш)</option><option value="19">индонезийский</option><option value="20">ирландский</option><option value="21">исландский</option><option value="22">испанский</option><option value="23">итальянский</option><option value="24">казахский</option><option value="25">кетский</option><option value="26">кечуа</option><option value="27">киргизский</option><option value="28">китайский</option><option value="29">корейский</option><option value="30">латинский</option><option value="31">латышский</option><option value="32">литовский</option><option value="33">македонский</option><option value="34">малайский</option><option value="35">молдавский</option><option value="36">монгольский</option><option value="37">немецкий</option><option value="38">нидерландский</option><option value="39">персидский</option><option value="40">польский</option><option value="41">португальский</option><option value="42">прусский</option><option value="43">румынский</option><option value="44">русский</option><option value="45">сербский</option><option value="46">словацкий</option><option value="47">словенский</option><option value="48">татарский</option><option value="49">тирольский (триентский)</option><option value="50">турецкий</option><option value="51">украинский</option><option value="52">фарлинго</option><option value="53">фарси</option><option value="54">финский</option><option value="55">фламандский</option><option value="56">французский</option><option value="57">хорватский</option><option value="58">чероки</option><option value="59">чешский</option><option value="60">шведский</option><option value="61">швейцарско-ретороманский</option><option value="62">шумерский</option><option value="63">энецкий</option><option value="64">эстонский</option><option value="65">японский</option></select></label><div class="form__item"><label class="form__label form__label_textCenter"><input class="form__fieldCheckbox" name="id_uroven'+ $lang +'" value="1" type="radio"><div class="form__checkbox"></div>Базовый</label><label class="form__label form__label_textCenter"><input class="form__fieldCheckbox" name="id_uroven'+ $lang +'" value="2" type="radio"><div class="form__checkbox"></div>Разговорный</label><label class="form__label form__label_textCenter"><input class="form__fieldCheckbox" name="id_uroven'+ $lang +'" value="3" type="radio"><div class="form__checkbox"></div>Свободный</label></div><div class="form__item-close js-form__item-close_lang"></div></div>')
    $('.js-form__langHidden').val($langCount)
  })

  $('.infoSummary').on('click', '.js-form__item-close_lang', function () {
    $(this).parents('.form__item').remove()
    $('.js-form__langHidden').val($langCount)
  })

  $('.infoSummary').on('click', '.js-form__item-add_study', function () {
    $study++
    $studyCount++
    $(this).parents('.form__item').after('<div class="form__item"><div class="form__item-title">Образование</div><div class="form__item-intro">Укажите образование</div><div class="form__btnAddForm"></div><div class="form__addForm"><div class="form__item"><label class="form__label"><select class="form__select" name="typeObraz'+ $study +'" data-id="1"><option value="1">Высшее</option><option value="2">Бакалавр</option><option value="3">Магистр</option><option value="4">Кандидат наук</option><option value="5">Доктор наук</option><option value="6">Неоконченное высшее</option><option value="7">Среднее</option><option value="8">Среднее специальное</option></select></label></div><div class="form__item"><label class="form__label"><input class="form__field" type="text" name="zavedenie'+ $study +'" placeholder="Учебное заведение" value=""></label><label class="form__label"><input class="form__field" type="text" name="facultet'+ $study +'" placeholder="Факультет" value=""></label><label class="form__label"><input class="form__field" type="text" name="specializacija'+ $study +'" placeholder="Специализация" value=""></label><label class="form__label"><input class="form__number js-skill__year3" type="number" name="year'+ $study +'" placeholder="Год" min="1900" max="2050"></label></div></div><div class="form__item-close js-form__item-close_study"></div></div>')
    $('.js-form__studyHidden').val($studyCount)
    $('.js-skill__year3').val(dateYears).attr('max', dateYears+1)
    $('.js-skill__year3').attr('placeholder', dateYears+1)
  })

  $('.infoSummary').on('click', '.js-form__item-close_study', function () {
    $(this).parents('.form__item').remove()
    $('.js-form__studyHidden').val($studyCount)
  })

  $('.infoSummary').on('click', '.js-form__item-add_skill', function () {
    $skill++
    $skillCount++
    $(this).parents('.form__item').after('<div class="form__item"><!-- Количество добавленных форм --><input class="js-form__skillHidden" type="hidden" value=""><div class="form__item-title">Опыт работы</div><div class="form__btnAddForm"></div><div class="form__item form__item_row"><div class="form__item"><label class="form__label"><div class="form__item-intro">Начало работы</div><select class="form__select" name="monthNach'+ $skill +'"><option value="1">Январь</option><option value="2">Февраль</option><option value="3">Март</option><option value="4">Апрель</option><option value="5">Май</option><option value="6">Июнь</option><option value="7">Июль</option><option value="8">Август</option><option value="9">Сентябрь</option><option value="10">Октябрь</option><option value="11">Ноябрь</option><option value="12">Декабрь</option></select></label></div><div class="form__item"><label class="form__label"><div class="form__item-intro">Окончание работы</div><input class="form__field js-skill__year" type="number" name="yearNach'+ $skill +'" placeholder="Число" min="1" max="31"></label></div><div class="form__item form__item_wFull"><label class="form__label form__label_textCenter form__label_margin js-form__label_openDate"><input class="form__fieldCheckbox" type="checkbox" checked name="nv'+ $skill +'" value="1" placeholder="Число" min="1" max="31"><div class="form__checkbox"></div>По настоящее время</label></div><div class="form__item js-form__item_date form__item_row form__item_wFull"><div class="form__item"><label class="form__label"><select class="form__select" name="monthKon'+ $skill +'"><option value="1">Январь</option><option value="2">Февраль</option><option value="3">Март</option><option value="4">Апрель</option><option value="5">Май</option><option value="6">Июнь</option><option value="7">Июль</option><option value="8">Август</option><option value="9">Сентябрь</option><option value="10">Октябрь</option><option value="11">Ноябрь</option><option value="12">Декабрь</option></select></label></div><div class="form__item"><label class="form__label"><input class="form__field js-skill__year2" type="number" name="yearKon'+ $skill +'" placeholder="Число" min="1" max="31"></label></div></div></div><div class="form__item"><label class="form__label"><input class="form__field" type="text" name="organizacija'+ $skill +'" placeholder="Организация" value=""></label><label class="form__label"><input class="form__field" type="text" name="doljnost'+ $skill +'" placeholder="Должность" value=""></label><label class="form__label"><textarea id="message" class="form__textarea" name="opisanie'+ $skill +'" rows="4" placeholder="Описание"></textarea></label></div><div class="form__item-add js-form__item-add_skill"></div></div>')
    $('.js-form__skillHidden').val($skillCount)
    $('.js-skill__year').val(dateYears).attr('max', dateYears+1)
    $('.js-skill__year').attr('placeholder', dateYears+1)
  })

  $('.infoSummary').on('click', '.js-form__item-close_skill', function () {
    $(this).parents('.form__item').remove()
    $('.js-form__skillHidden').val($skillCount)
  })

  var date = new Date()
  var dateYears = date.getFullYear()
  $('.js-form__number').val(dateYears).attr('max', dateYears+1)
  $('.js-skill__year').val(dateYears).attr('max', dateYears+1)
  $('.js-skill__year').attr('placeholder', dateYears+1)
  $('.js-skill__year3').val(dateYears).attr('max', dateYears+1)
  $('.js-skill__year3').attr('placeholder', dateYears+1)

  $('.form__item_linkPortfolio').on('click', '.form__addLink', function () {
    $portfolioLink++
    $(this).parents('.form__item_linkPortfolio').children('.form__label_after').after('<label class="form__label"><div class="form__label_close"></div><input name="portfolio'+ $portfolioLink +'" class="form__field form__field_linkPortfolio" type="text" placeholder="Ссылка на портфолио" value=""></label>')
  })

  $('.form__item_linkPortfolio').on('click', '.form__label_close', function (){
    $(this).parents('.form__label').remove()
  })

  $('body').on('change', '.js-form__label_openDate', function () {
    if($(this).children('input').is(':checked')) {
      $(this).parents('.form__item').next('.js-form__item_date').css('display', 'none')
    } else {
        $(this).parents('.form__item').next('.js-form__item_date').css('display', 'flex')
        $(this).parents('.form__item').next('.js-form__item_date').stop().animate({opacity: "1"}, 0)
        $('.js-skill__year2').val(dateYears).attr('max', dateYears+1)
        $('.js-skill__year2').attr('placeholder', dateYears+1)
    }
  })

  $('.js-chat__btn').click(function () {
    $('.chat__head-info').stop().fadeToggle()
  })

  $('.warning__wrap').mouseup(function (e) {
		var div = $('.warning');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(this).stop().animate({opacity: "0"}, 300, function(){
        $(this).css('display', 'none')
      })
		}
	})

  $('.js-open-modal').click(function () {
    var datAttr = $(this).data('modalopen')
    $('.warning__wrap[data-modal="'+ datAttr +'"]').css('display', 'flex')
    $('.warning__wrap[data-modal="'+ datAttr +'"]').stop().animate({opacity: "1"}, 300)
  })

  $('.js-close__modal').click(function () {
    $(this).parents('.warning__wrap').stop().animate({opacity: "0"}, 300, function(){
      $(this).parents('.warning__wrap').css('display', 'none')
    })
  })

  $('.js-settings__open').click(function () {
    $('.form__item_hide').not($(this).parents('.settings__form').children('.form__item_hide')).slideUp()
    $(this).parents('.settings__form').children('.form__item_hide').slideToggle()
  })

  $('.jobOpenings__item').click(function () {
    $(this).children().children('.jobOpenings__act-answer').fadeToggle()
  })

  $('.filter__mobile-icon').click(function () {
    $('.filter__form').addClass('filter__form_mobileActive')
    $('.filter__form').stop().animate({opacity: "1"}, 300, function(){})
  })

  $('.filter__back').click(function () {
    $('.filter__form').stop().animate({opacity: "0"}, 300, function(){
      $('.filter__form').removeClass('filter__form_mobileActive')
    })
  })

  $('.filter__item').click(function () {
    $('.filter__item-box').not($(this).children('.filter__item-box')).stop().fadeOut()
    $(this).children('.filter__item-box').stop().fadeIn()
  })

  $('body').mouseup(function (e) {
		var div = $('.filter__item-box');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.fadeOut()
		}
  })

  $('.addSummary__select, .addSummary__dataField, .form__select').styler();

  $('.addSummary__title-icon').click(function () {
    $(this).parents('.addSummary__title').next().fadeToggle()
  })

  $('.profile__card-head').click(function () {
    $('.profile__card-body').slideToggle()
  })

  $('.st0').click(function() {
    $(this).toggleClass('st1')
  })

  $('.js-navOpen').click(function () {
    $(this).toggleClass('navOpen_active')
    $('.filter__box').css('left', '-400px')
    if ($('.nav').hasClass('nav_active')) {
      $('.nav').removeClass('nav_active')
      $('.nav').stop().animate({opacity: "0"}, 300, function() {
        $('.nav').css('display', 'none')
      })
      $('.asideBar').removeClass('asideBar_active')
    } else {
      $('.nav').toggleClass('nav_active')
      $('.nav').css('display', 'flex')
      $('.nav').css('zIndex', '3')
      $('.nav').stop().animate({opacity: "1"}, 300)
    }
    $('html body').toggleClass('hideScroll')
  })

  $('.js-request__field').keyup(function() {
    if ($(this).val().length > 0 || $(this).val().length > " ")
      $('.request__field_hide').fadeIn()
    else
      $('.request__field_hide').fadeOut()
  })

  $('.tariffs__item_hover').click(function () {
    $('.tariffs__item_hover').not($(this)).removeClass('tariffs__item_active')
    $(this).addClass('tariffs__item_active')
  })
});
