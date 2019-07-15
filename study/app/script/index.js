
window.onload = function() {

  var items = document.querySelectorAll('.item');
  var bodyTouchScroll = document.querySelector('body');
  var scrollMouse = 0;
  var $touchStart;

  document.onwheel = function (e) {
    clearItems();
    if (e.deltaY >= 0) {
      nextItem();
    } else {
      prevItem();
    }
  }

  // Скролл на мобильниках
  bodyTouchScroll.addEventListener('touchstart', function(e) {
    $touchStart = e.changedTouches[0].screenY
  })

  bodyTouchScroll.addEventListener('touchmove', function(e) {
    if ($touchStart + 20 < e.changedTouches[0].screenY) {
      clearItems ();
      prevItem();
      $touchStart = e.changedTouches[0].screenY
    } else if ($touchStart - 20 > e.changedTouches[0].screenY){
      clearItems ();
      nextItem();
      $touchStart = e.changedTouches[0].screenY
    }
  })

  // Функции
  function clearItems () {
    var heightPage = window.innerHeight
    for (var i = 0; i < items.length; i++) {
      items[i].style.zIndex = 0;
      items[i].style.opacity = 0;
    }
    return
  }

  function nextItem () {
    scrollMouse++
    if (scrollMouse > items.length - 1) {
      scrollMouse = 0;
    }
    items[scrollMouse].style.zIndex = 1
    items[scrollMouse].style.opacity = 1
    return
  }

  function prevItem () {
    scrollMouse--
    if (scrollMouse < 0) {
      scrollMouse = items.length - 1
    }
    items[scrollMouse].style.zIndex = 1
    items[scrollMouse].style.opacity = 1
    return
  }
};
