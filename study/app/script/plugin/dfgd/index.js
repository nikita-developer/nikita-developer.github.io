// $(".addLanguage").click(function () { //Р”РѕР±Р°РІРёС‚СЊ СЏР·С‹Рє
//   var idOtvet = $('.addLanguage').data('id');
//   dataId = idOtvet + 1;
//   baz = dataId;
//   $('.addLanguage').data('id', baz).attr('data-id', baz);
//   $("input[name~='countLanguage']").val(baz);
//
//   var str1 = $.ajax({url: '/ajax.php',
//     data: {"getLanguages": 1},
//     type: "POST",
//     success: function(data){
//       data = JSON.parse(data);
//       var str1 = '';
//       var str12 = '';
//       for(var i = 0; i < data['jaziki'].length; i++){
//         str = '<option value="'+data['jaziki'][i].id+'">'+data['jaziki'][i].name+'</option>';
//         str1 = str1 + str;
//       }
//       for(var i = 0; i < data['urovni'].length; i++){
//         if(i == 0)
//           var chack = 'checked=""';
//         str2 = '<label class="u-check">'+
//               '<input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="id_uroven'+baz+'" value="'+data['urovni'][i].id+'" type="radio" '+chack+'>'+
//               '<span class="btn btn-md btn-block u-btn-outline-lightgray g-color-white--checked g-bg-primary--checked rounded-0">'+data['urovni'][i].name+'</span>'+
//             '</label>';
//         str12 = str12 + str2;
//         chack = '';
//       }
//
//       $(".language").append('<hr><div class="form-group g-mb-25"><select class="form-control rounded-0" name="language[]">'+str1+'</select></div>'+
//       '<div class="btn-group justified-content">'+str12+'</div>');
//     }
//   })
//
// });
//
// $(".addRabota").click(function () { //Р”РѕР±Р°РІРёС‚СЊ СЏР·С‹Рє
//   var idOtvet = $('.addRabota').data('id');
//   dataId = idOtvet + 1;
//   baz = dataId;
//   $('.addRabota').data('id', baz).attr('data-id', baz);
//   $("input[name~='countRabota']").val(baz);
//
//   var str1 = $.ajax({url: '/ajax.php',
//     data: {"getMonth": 1},
//     type: "POST",
//     success: function(data){
//       data = JSON.parse(data);
//       var str1 = '';
//
//       for(var i = 0; i < data.length; i++){
//         str = '<option value="'+data[i].id+'">'+data[i].name+'</option>';
//         str1 = str1 + str;
//       }
//       str1 = '<option></option>' + str1;
//       $(".rabota").append('<hr><div class="form-group g-mb-0"><label>РќР°С‡Р°Р»Рѕ СЂР°Р±РѕС‚С‹</label></div><div class="row g-mb-25"><div class="col-md-3"><select class="form-control rounded-0" name="monthNach'+baz+'">'+str1+'</select></div><div class="col-md-3"><input class="form-control rounded-0" type="number" name="yearNach'+baz+'"></div></div>'+
//       '<div class="form-group g-mb-0"><div class="col-md-6"><label>РћРєРѕРЅС‡Р°РЅРёРµ СЂР°Р±РѕС‚С‹</label></div></div>'+
//       '<div class="form-group row g-mb-25"><div class="col-md-12 rabonaNV"><div class="form-check form-check-inline mb-0" ><label class="form-check-label mr-2 "><input class="form-check-input mr-1 " type="checkbox" name="nv'+baz+'" checked="" value="1"> РџРѕ РЅР°СЃС‚РѕСЏС‰РµРµ РІСЂРµРјСЏ</label></div></div></div>'+
//       '<div class="form-group row g-mb-25 nv'+baz+' none"><div class="col-md-3"><select class="form-control rounded-0" name="monthKon'+baz+'">'+str1+'</select></div><div class="col-md-3"><input class="form-control rounded-0" type="number" name="yearKon'+baz+'"></div></div>'+
//       '<div class="input-group g-mb-10"><input class="form-control form-control-md rounded-0" type="text" name="organizacija'+baz+'" placeholder="РћСЂРіР°РЅРёР·Р°С†РёСЏ" value=""></div>'+
//       '<div class="input-group g-mb-10"><input class="form-control form-control-md rounded-0" type="text" name="doljnost'+baz+'" placeholder="Р”РѕР»Р¶РЅРѕСЃС‚СЊ" value=""></div>'+
//       '<div class="form-group g-mb-10"><textarea id="message" class="form-control form-control-md rounded-0 " name="opisanie'+baz+'" rows="4"></textarea></div>'+
//       '</div>');
//     }
//   })
//
// });
//
// $(".addObrazovanie").click(function () { //Р”РѕР±Р°РІРёС‚СЊ СЏР·С‹Рє
//   var idOtvet = $('.addObrazovanie').data('id');
//   dataId = idOtvet + 1;
//   baz = dataId;
//   $('.addObrazovanie').data('id', baz).attr('data-id', baz);
//   $("input[name~='countObrazovanie']").val(baz);
//
//   var str1 = $.ajax({url: '/ajax.php',
//     data: {"getObrazovanie": 1},
//     type: "POST",
//     success: function(data){
//       data = JSON.parse(data);
//       var str1 = '';
//
//       for(var i = 0; i < data.length; i++){
//         str = '<option value="'+data[i].id+'">'+data[i].name+'</option>';
//         str1 = str1 + str;
//       }
//       str1 = '<option></option>' + str1;
//       $(".obrazovanie").append('<hr><div class="form-group g-mb-0"><label>РЈСЂРѕРІРµРЅСЊ</label></div><div class="row g-mb-25"><div class="col-md-6"><select class="form-control rounded-0" name="typeObraz'+baz+'" data-id="'+baz+'">'+str1+'</select></div></div>'+
//       '<div class="form-group g-mb-20 tpObraz'+baz+' none"><div class="input-group g-mb-10"><input class="form-control form-control-md rounded-0" type="text" name="zavedenie'+baz+'" placeholder="РЈС‡РµР±РЅРѕРµ Р·Р°РІРµРґРµРЅРёРµ" value=""></div></div>'+
//       '<div class="form-group g-mb-20 tpObraz'+baz+' none"><div class="input-group g-mb-10"><input class="form-control form-control-md rounded-0" type="text" name="facultet'+baz+'" placeholder="Р¤Р°РєСѓР»СЊС‚РµС‚" value=""></div></div>'+
//       '<div class="form-group g-mb-20 tpObraz'+baz+' none"><div class="input-group g-mb-10"><input class="form-control form-control-md rounded-0" type="text" name="specializacija'+baz+'" placeholder="РЎРїРµС†РёР°Р»РёР·Р°С†РёСЏ" value=""></div></div>'+
//       '<div class="col-md-3  tpObraz'+baz+' none"><input class="form-control rounded-0" type="number" name="year'+baz+'"></div>'+
//       '</div>');
//     }
//   })
//
// });
//
// //РЎРѕРѕР±С‰РµРЅРёРµ
//
// $(".sendMessage").click(function() { //РѕС‚РїСЂР°РІРёС‚СЊ СЃРѕРѕР±С‰РµРЅРёРµ
//   var text = $('.message-input').val();
//   var adres = document.location.pathname;
//   adres = adres.split('/');
//   var idOtklik = adres[3];
//   if(text && idOtklik){
//     $.ajax({url: '/ajax.php',
//       data: {"addMessage": text, "otkl": idOtklik},
//       type: "POST",
//       success: function(data){
//         if(data == 'error')
//           alert('РћС€РёР±РєР°! РЎРѕРѕР±С‰РµРЅРёРµ РЅРµ РґРѕСЃС‚Р°РІР»РµРЅРѕ');
//         else
//           $('.message-input').val('');
//       },
//       error: function(){
//         alert('РћС€РёР±РєР°! РЎРѕРѕР±С‰РµРЅРёРµ РЅРµ РґРѕСЃС‚Р°РІР»РµРЅРѕ');
//       }
//     })
//   }
// });
//
// $(".getFirstMessage").click(function() { //РІС‹РІРѕРґ РїСЂРµРґС‹РґСѓС‰РёС… СЃРѕРѕР±С‰РµРЅРёР№
//   idFirstMessage = $('.getFirstMessage').attr('data-first-message');
//
//   if(idFirstMessage != 0){
//     var adres = document.location.pathname;
//     adres = adres.split('/');
//     var idOtklik = adres[3];
//     $.ajax({url: '/ajax.php',
//       data: {"getFirstMessage": idFirstMessage, "otkl": idOtklik},
//       type: "POST",
//       success: function(data){
//         if(data == 'error')
//           alert('РћС€РёР±РєР°! РЎРѕРѕР±С‰РµРЅРёРµ РЅРµ Р·Р°РіСЂСѓР¶РµРЅС‹');
//         else {
//           alert(data);
//           data = JSON.parse(data);
//
//           for(var i =  data['message'].length; i >= 0; i--){
//             var str = data['message'][i];
//             $('.getFirstMessage').after(str);
//           }
//           if(data['lastID'])
//             $('.getFirstMessage').attr('data-first-message', data['lastID']);
//           else
//             $('.getFirstMessage').attr('data-first-message', 0);
//         }
//
//       },
//       error: function(){
//         alert('РћС€РёР±РєР°! РЎРѕРѕР±С‰РµРЅРёРµ РЅРµ Р·Р°РіСЂСѓР¶РµРЅС‹');
//       }
//     })
//   }
//   else {
//     alert('РЎРѕРѕР±С‰РµРЅРёР№ Р±РѕР»СЊС€Рµ РЅРµС‚');
//   }
// });
//
//
// var fs=function(){
//   var message = [];
//   var i = 0;
//
//   $('[data-message-id]').each( function(e){
//     var $el = $(this);
//     if($el.hasClass('noread')) {
//       message[i] = $el.attr('data-message-id');
//       i++;
//     }
//   })
//   if(i > 0){
//     var adres = document.location.pathname;
//     adres = adres.split('/');
//     var idOtklik = adres[3];
//     $.ajax({url: '/ajax.php',
//       data: {"NoReadMessage": message, "otkl": idOtklik},
//       type: "POST",
//       success: function(data){
//         if(data){
//           data = JSON.parse(data);
//           for(var i = 0; i < data.length; i++){
//             $('[data-message-id="'+data[i].id+'"]').removeClass('noread');
//           }
//         }
//
//       }
//     })
//   }
//   setTimeout(arguments.callee,1500);
// }
//
// var fn=function(){ //РїСЂРѕРІРµСЂРєР° РЅРѕРІС‹С… СЃРѕРѕР±С‰РµРЅРёР№
//   idLastMessage = $('.chat-message-form').attr('data-last-message');
//   //idLastMessage = $('.chat-message[data-message-id]:last').attr('data-message-id');
//   if(idLastMessage){
//     var adres = document.location.pathname;
//     adres = adres.split('/');
//     var idOtklik = adres[3];
//
//     $.ajax({url: '/ajax.php',
//       data: {"getLastMessages": idLastMessage, "otkl": idOtklik},
//       type: "POST",
//       success: function(data){
//         if(data == 'error')
//           alert('РћС€РёР±РєР°! РЎРѕРѕР±С‰РµРЅРёСЏ РЅРµ Р·Р°РіСЂСѓР¶РµРЅС‹');
//         else {
//           if(data){
//             data = JSON.parse(data);
//             if(data['lastID'])
//               $('.chat-message-form').attr('data-last-message', data['lastID']);
//             for(var i =  data['message'].length; i >= 0; i--){
//               var str = data['message'][i];
//               $('.chat-discussion').append(str);
//             }
//
//           }
//         }
//       },
//       error: function(){
//         alert('РћС€РёР±РєР°! РЎРѕРѕР±С‰РµРЅРёСЏ РЅРµ Р·Р°РіСЂСѓР¶РµРЅС‹');
//       }
//     })
//   }
//   setTimeout(arguments.callee,1500);
// }
// setTimeout( fs,1500 );
// setTimeout( fn,1500 );
//
//
//
//
//
// $(document).ready(function() {
//
//    $('.buttonVivod').click(function(){ /*СЃРєСЂС‹С‚РёРµ С‚РµРєСЃС‚Р° РґРѕР»Р¶РЅРѕСЃС‚Рё*/
//     $(this).toggleClass('active');
//     var idClass = $(this).data('idwork');
//     $('.workBlock'+idClass).toggleClass('opener');
//
//     if (!$(this).data('status')) {
//       $(this).data('status', true).html('РЎРєСЂС‹С‚СЊ Р±Р»РѕРє');
//     } else {
//       $(this).data('status', false).html('РџРѕРєР°Р·Р°С‚СЊ Р±Р»РѕРє');
//     }
//   });
//
//
//
//   $('.blockForDel').on('click', '.deleteBlockRezume', function(e){
//     $(this).parent().remove()
//   });
//
//   $('.rabota').on('click', 'div .rabonaNV input', function(e){
//     var Nclass = $(this).val();
//     $('.nv'+Nclass).toggleClass('block none');
//   });
//
//   $('.obrazovanie').on('change', 'select', function(e){
//     var Nclass = $(this).data('id');
//     var valSel = $(this).val();
//     if(valSel == 7){
//       $('.tpObraz'+Nclass).removeClass('block');
//       $('.tpObraz'+Nclass).addClass('none');
//     }
//     else {
//       $('.tpObraz'+Nclass).removeClass('none');
//       $('.tpObraz'+Nclass).addClass('block');
//     }
//
//   });
//
//
//   $('.visibleElement').on('click', function(e){
//     var nameElem = $(this).val();
//     $('.'+nameElem).toggleClass('none blockB');
//   });
//
//   //РЎРћРћР‘Р©Р•РќРР•
//   $('.message-input').keydown(function(e) {
//     if(e.keyCode === 13 && e.ctrlKey) {
//       var text = $('.message-input').val();
//       var adres = document.location.pathname;
//       adres = adres.split('/');
//       var idOtklik = adres[2];
//
//       if(text && idOtklik){
//         $.ajax({url: '/ajax.php',
//           data: {"addMessage": text, "idOtklik": idOtklik},
//           type: "POST",
//           success: function(data){
//             if(data == 'error')
//               alert('РћС€РёР±РєР°! РЎРѕРѕР±С‰РµРЅРёРµ РЅРµ РґРѕСЃС‚Р°РІР»РµРЅРѕ');
//             else {
//               $('.message-input').val('');
//               alert(data);
//             }
//           },
//           error: function(){
//             alert('РћС€РёР±РєР°! РЎРѕРѕР±С‰РµРЅРёРµ РЅРµ РґРѕСЃС‚Р°РІР»РµРЅРѕ1');
//           }
//         })
//       }
//     }
//   });
//
//
// });
