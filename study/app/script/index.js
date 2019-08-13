
$(document).ready(function() {
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
      $('.nav').css('zIndex', '2')
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
      $(this).val('')
    }
  })

  $('.profileForm__autocompleteBox').on('click', '.js-profileForm__autocompleteSkills', function () {
    $(this).remove()
  })

  $('.profileForm__phone').mask('+7 000-000-00-00')

  $('.profileForm__openFio').change(function () {
    $('.profileForm__fio').toggleClass('profileForm__fio_active')
  })
})
