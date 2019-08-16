
$(document).ready(function() {
  var $lang = 1;
  var $study = 1;
  var $skill = 1;
  var $portfolioLink = 1;

  $('.js-partnersSlide').owlCarousel({
    loop: true,
    doth: true,
    margin: 64,
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
    items: 3,
    stagePadding: 7,
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

  $('.js-jobOpenings_nav').owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    items: 3,
    stagePadding: 7,
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

  $('.js-navOpen').click(function () {
    $(this).toggleClass('navOpen_active');
    $('.filter__box').css('left', '-400px');

    if ($('.nav').hasClass('nav_active')) {
      $('.nav').removeClass('nav_active')
      $('.nav').stop().animate({opacity: "0"}, 300, function(){
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

  $('.checkIn__callback-error').click(function () {
    $(this).parent().fadeOut()
  })

  $('.filter__category').click(function (e) {
    var $this = $(this).children('.filter__list')
    $('.filter__category').not($(this)).removeClass('filter__category_active')
    $('.filter__list').not($(this).children('.filter__list')).fadeOut()
    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
      if ($(this).hasClass('filter__category_active')) {
        $(this).removeClass('filter__category_active')
        $(this).children('.filter__list').fadeOut()
      } else {
        $(this).addClass('filter__category_active')
        $(this).children('.filter__list').fadeIn()
      }
    }
  })

  var $filterCount = 0
  $('.filter__list').on('click', '.filter__item', function () {
    $filterCount = $(this).parents('.filter__list').find('input:checked').length
    if ($filterCount == 0) {
      $(this).parents('.filter__category').children('.filter__category-count').hide()
      $('.js-filter__btn_reset').hide()
    } else {
      $('.js-filter__btn_reset').show()
      $(this).parents('.filter__category').children('.filter__category-count').show().text($filterCount)
    }
  })

  $('.js-filter__btn_reset').click(function (){
    $filterCount = 0
    $('.js-filter__btn_reset').hide()
    $('.filter__category-count').hide()
    $('.filter__category').removeClass('filter__category_active')
    $('.filter__list').fadeOut()
    $('.filter__label').children('input').prop('checked', false)
  })

  $('.filter__box-close').click(function (){
    $(this).parents('.filter__box').css('left', '-400px');
  })

  $('.js-filter__btn_open').click(function (){
    $(this).parents('.filter').children('.filter__box').css('left', '0');
  })

  $('.filter__range').slider({
    range: true,
    step: 1000,
    min: 0,
    max: 200000,
    values: [0, 200000],
    slide: function(event, ui) {
      $('.filter__price1').val(ui.values[0]);
      $('.filter__price2').val(ui.values[1]);
    }
  });

  $('.filter__price1').val($('.filter__range').slider('values', 0));
  $('.filter__price2').val($('.filter__range').slider('values', 1));

  $('.filter__price1').change(function() {
    $('.filter__range').slider('values', 0, $(this).val());
  });
  $('.filter__price2').change(function() {
    $('.filter__range').slider('values', 1, $(this).val());
  });

  $('.profileForm__range').slider({
    range: true,
    step: 1000,
    min: 0,
    max: 200000,
    values: [30000, 80000],
    slide: function(event, ui) {
      $('.profileForm__price1').val(ui.values[0]);
      $('.profileForm__price2').val(ui.values[1]);
    }
  });

  $('.profileForm__price1').val($('.profileForm__range').slider('values', 0));
  $('.profileForm__price2').val($('.profileForm__range').slider('values', 1));

  $('.profileForm__price1').change(function() {
    $('.profileForm__range').slider('values', 0, $(this).val());
  });
  $('.profileForm__price2').change(function() {
    $('.profileForm__range').slider('values', 1, $(this).val());
  });

  $('.js-form__range').slider({
    range: true,
    step: 1000,
    min: 0,
    max: 200000,
    values: [30000, 80000],
    slide: function(event, ui) {
      $('.form__field_min').val(ui.values[0]);
      $('.form__field_max').val(ui.values[1]);
    }
  });

  $('.form__field_min').val($('.js-form__range').slider('values', 0));
  $('.form__field_max').val($('.js-form__range').slider('values', 1));

  $('.form__field_min').change(function() {
    $('.js-form__range').slider('values', 0, $(this).val());
  });
  $('.form__field_max').change(function() {
    $('.js-form__range').slider('values', 1, $(this).val());
  });

  $(function () {
    var availableTags = [
      "1C","C/C++","C#","CoffeeScript","Elixir ","Erlang ","Flow ","Go (Golang)","Groovy ","HTML/CSS ","Perl","Java","Javascript","Kotlin","Node.js","Objective C","PHP","Python","R","Ruby ","Scala","Swift","TypeScript ","RxJava","ASP.NET MVC","UML","C","Assembler","C++","РАСТ","Hardware","СХД ","Нахе","SWIFT Aliance","RxSwift","UCC","springboot","Apache","Cassandra","MariaDB","MongoDB","MSSQL","MySQL","Oracle ","PostgreSQL ","Redis ","Scylla","Tarantool","Hadoop","noSQL ","Delphi","Greenplum","PaaS","LaaS","IaaS","Google Cloud","Google BigQuery","FireBird","CRM","GIT, SVN ","PowerDesigner ","erwin","Pentaho","Сlickhouse","SAP HANA","Android ","ASP.Net","BI","Data mining","Docker ","iOS ","Jenkins ","Linux","Machine Learning","Nginx ","Selenium ","SQL ","RabbitMQ ","Kafka ","IBM Websphere MQ ","SOA ","XML XSD WSDL ","TOGAF","OpenGL","RTOS","NLP ","CEPH","Openstack","Atlassian Jira","JMS ","Canvas","Nagios","GrayLog ","Zabbix ","JVM ","ASP.NET MVC 5 ","Web Dynpro",".NET","Angular","Backbone.js","Bootstrap","Cucumber.js","Django ","Ember.js ","Flask ","GWT ","jQuery ","JSF ","Jest ","Laravel ","Matrialize ","Qt ","React ","Redux","React Native","Ruby on Rails ","Spring ","Symfony","Unity3D","Vert.x","Vue.js","Yii ","Zend ","Kubernetes ","Bitrix ","j2ee","Babel","PLM","SID","Яндекс.Метрика","AppsFlyer","Firebase","Apache Spark","Flink","bash","DWH","Tableau","AngularJS","Viper ","SAP","LVM","Аpache","LAMP","Luigi ","css ","SASS/SCSS ","tornado ","t-sql ","Unreal Engine ","Blueprints ","BIRT ","Power BI ",".NET Core ","Selenium WD ","Xamarin ","MainMap ","Test case ","DAX 2012 ","mobx ","Google Analytics","UIKit","AVKit ","Maven ","ВКС ","WebGL","Debian","CentOS","CCNP","CCDE","CCIE","Cisco","Brocade","Allied Telesis","Juniper","Mikro Tik","UTM","Extreme","Asterisk","АТС Panasonic","Google Adwords","Трекинг системы","Fraud analyst","Яндекс Дисплей","MES","AfterEffects","AXAPTA","PL SQL","Trainee","API","Mocha.js","E-Staff","Periscope Data","Apache Airflow","Mindbox"
    ];

    $('.profileForm__autocompleteInput').autocomplete({
      source: availableTags
    })
  })

  $('.profileForm__autocompleteLabel').on('keydown', '.profileForm__autocompleteInput', function(e) {
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
          $('.profileForm__arrayLangSelect').append('<option>' + $(this).text() + '</option>')
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
        $('.profileForm__arrayLangSelect').append('<option>' + $(this).text() + '</option>')
      });
      $('.profileForm__autocompleteInput').val('')
    }
  })

  $('.profileForm__autocompleteBox').on('click', '.js-profileForm__autocompleteSkills', function () {
    $(this).remove()
    $('.profileForm__arrayLangSelect').find('option').remove()
    $('.profileForm__autocompleteSkills').each(function (index, value) {
      $('.profileForm__arrayLangSelect').append('<option>' + $(this).text() + '</option>')
    });
  })

  $('.profileForm__phone').mask('+7 000-000-00-00')

  $('.profileForm__openFio').change(function () {
    $('.profileForm__fio').toggleClass('profileForm__fio_active')
  })

  $('.infoSummary').on('click', '.js-form__item-add_lang', function () {
    $lang++
    $(this).parents('.form__item').after('<div class="form__item form__item_active"><div class="form__item-title">Язык</div><div class="form__item-intro">Укажите язык</div><div class="form__btnAddForm"></div><label class="form__label form__label_textCenter"><select class="form__select" name="language'+ $lang +'"><option value="1">азербайджанский</option><option value="2">аккадский</option><option value="3">албанский</option><option value="4">английский</option><option value="5">арабский</option><option value="6">армянский</option><option value="7">африкаанс</option><option value="8">ацтекский</option><option value="9">белорусский</option><option value="10">болгарский</option><option value="11">венгерский</option><option value="12">венетский</option><option value="13">вьетнамский</option><option value="14">голландский</option><option value="15">грузинский</option><option value="16">датский</option><option value="17">иврит</option><option value="18">еврейский (идиш)</option><option value="19">индонезийский</option><option value="20">ирландский</option><option value="21">исландский</option><option value="22">испанский</option><option value="23">итальянский</option><option value="24">казахский</option><option value="25">кетский</option><option value="26">кечуа</option><option value="27">киргизский</option><option value="28">китайский</option><option value="29">корейский</option><option value="30">латинский</option><option value="31">латышский</option><option value="32">литовский</option><option value="33">македонский</option><option value="34">малайский</option><option value="35">молдавский</option><option value="36">монгольский</option><option value="37">немецкий</option><option value="38">нидерландский</option><option value="39">персидский</option><option value="40">польский</option><option value="41">португальский</option><option value="42">прусский</option><option value="43">румынский</option><option value="44">русский</option><option value="45">сербский</option><option value="46">словацкий</option><option value="47">словенский</option><option value="48">татарский</option><option value="49">тирольский (триентский)</option><option value="50">турецкий</option><option value="51">украинский</option><option value="52">фарлинго</option><option value="53">фарси</option><option value="54">финский</option><option value="55">фламандский</option><option value="56">французский</option><option value="57">хорватский</option><option value="58">чероки</option><option value="59">чешский</option><option value="60">шведский</option><option value="61">швейцарско-ретороманский</option><option value="62">шумерский</option><option value="63">энецкий</option><option value="64">эстонский</option><option value="65">японский</option></select></label><div class="form__item"><label class="form__label form__label_textCenter"><input class="form__fieldCheckbox" name="id_uroven'+ $lang +'" value="1" type="radio"><div class="form__checkbox"></div>Базовый</label><label class="form__label form__label_textCenter"><input class="form__fieldCheckbox" name="id_uroven'+ $lang +'" value="2" type="radio"><div class="form__checkbox"></div>Разговорный</label><label class="form__label form__label_textCenter"><input class="form__fieldCheckbox" name="id_uroven'+ $lang +'" value="3" type="radio"><div class="form__checkbox"></div>Свободный</label></div><div class="form__item-close js-form__item-close_lang"></div></div>')
  })

  $('.infoSummary').on('click', '.js-form__item-close_lang', function () {
    $(this).parents('.form__item').remove()
  })

  $('.infoSummary').on('click', '.js-form__item-add_study', function () {
    $study++
    $(this).parents('.form__item').after('<div class="form__item"><div class="form__item-title">Образование</div><div class="form__item-intro">Укажите образование</div><div class="form__btnAddForm"></div><div class="form__addForm"><div class="form__item"><label class="form__label"><select class="form__select" name="typeObraz'+ $study +'" data-id="1"><option value="1">Высшее</option><option value="2">Бакалавр</option><option value="3">Магистр</option><option value="4">Кандидат наук</option><option value="5">Доктор наук</option><option value="6">Неоконченное высшее</option><option value="7">Среднее</option><option value="8">Среднее специальное</option></select></label></div><div class="form__item"><label class="form__label"><input class="form__field" type="text" name="zavedenie'+ $study +'" placeholder="Учебное заведение" value=""></label><label class="form__label"><input class="form__field" type="text" name="facultet'+ $study +'" placeholder="Факультет" value=""></label><label class="form__label"><input class="form__field" type="text" name="specializacija'+ $study +'" placeholder="Специализация" value=""></label><label class="form__label"><input class="form__number js-form__number" type="number" name="year'+ $study +'" placeholder="Год" min="1900"></label></div></div><div class="form__item-close js-form__item-close_study"></div></div>')
  })

  $('.infoSummary').on('click', '.js-form__item-close_study', function () {
    $(this).parents('.form__item').remove()
  })

  $('.infoSummary').on('click', '.js-form__item-add_skill', function () {
    $skill++
    $(this).parents('.form__item').after('<div class="form__item"><div class="form__item-title">Опыт работы</div><div class="form__btnAddForm"></div><div class="form__item form__item_row"><div class="form__item"><label class="form__label"><div class="form__item-intro">Начало работы</div><select class="form__select" name="monthNach'+ $skill +'"><option value="1">Январь</option><option value="2">Февраль</option><option value="3">Март</option><option value="4">Апрель</option><option value="5">Май</option><option value="6">Июнь</option><option value="7">Июль</option><option value="8">Август</option><option value="9">Сентябрь</option><option value="10">Октябрь</option><option value="11">Ноябрь</option><option value="12">Декабрь</option></select></label></div><div class="form__item"><label class="form__label"><div class="form__item-intro">Окончание работы</div><input class="form__field" type="number" name="yearNach'+ $skill +'" placeholder="Число" min="1" max="31"></label></div><div class="form__item form__item_wFull"><label class="form__label form__label_textCenter form__label_margin"><input class="form__fieldCheckbox" type="checkbox" name="nv'+ $skill +'" checked="" value="1" placeholder="Число" min="1" max="31"><div class="form__checkbox"></div>По настоящее время</label></div><div class="form__item"><label class="form__label"><select class="form__select" name="monthKon'+ $skill +'"><option value="1">Январь</option><option value="2">Февраль</option><option value="3">Март</option><option value="4">Апрель</option><option value="5">Май</option><option value="6">Июнь</option><option value="7">Июль</option><option value="8">Август</option><option value="9">Сентябрь</option><option value="10">Октябрь</option><option value="11">Ноябрь</option><option value="12">Декабрь</option></select></label></div><div class="form__item"><label class="form__label"><input class="form__field" type="number" name="yearKon'+ $skill +'" placeholder="Число" min="1" max="31"></label></div></div><div class="form__item"><label class="form__label"><input class="form__field" type="text" name="organizacija'+ $skill +'" placeholder="Организация" value=""></label><label class="form__label"><input class="form__field" type="text" name="doljnost'+ $skill +'" placeholder="Должность" value=""></label><label class="form__label"><textarea id="message" class="form__textarea" name="opisanie'+ $skill +'" rows="4" placeholder="Описание"></textarea></label></div><div class="form__item-close js-form__item-close_skill"></div></div>')
  })

  $('.infoSummary').on('click', '.js-form__item-close_skill', function () {
    $(this).parents('.form__item').remove()
  })

  var date = new Date()
  var dateYears = date.getFullYear()
  $('.js-form__number').val(dateYears).attr('max', dateYears)

  $('.form__item_linkPortfolio').on('click', '.form__addLink', function () {
    $portfolioLink++
    $(this).parents('.form__item_linkPortfolio').children('.form__label_after').after('<label class="form__label"><div class="form__label_close"></div><input name="portfolio'+ $portfolioLink +'" class="form__field form__field_linkPortfolio" type="text" placeholder="Ссылка на портфолио" value=""></label>')
  })

  $('.form__item_linkPortfolio').on('click', '.form__label_close', function (){
    $(this).parents('.form__label').remove()
  })

})
