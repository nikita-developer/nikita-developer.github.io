
$(document).ready(function() {
  const image = document.getElementById('image');
  const cropper = new Cropper(image, {
    crop(event) {
      var $top = event.detail.y;
      var $right = event.detail.x + event.detail.width;
      var $bottom = event.detail.y + event.detail.height;
      var $left = event.detail.x;
      console.log('left ' + $left + ' px');
      console.log('top ' + $top + ' px');
      console.log('right ' + $right + ' px');
      console.log('bottom ' + $bottom + ' px');
    },
  });
});
