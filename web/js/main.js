document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});

$(document).ready(function(){
  $('.slider').slider();
  $('.venobox').venobox({
    framewidth : '200px',
    frameheight: '300px'
  });
});
var glideMulti1 = new Glide('.multi1', {
  type: 'carousel',
  perView: 5,
  focusAt: 'center',
  gap: 40,
  breakpoints: {
    1200:{
      perView: 3
    },
    800:{
      perView: 2
    }
  }
});
var glideMulti2 = new Glide('.multi2', {
  type: 'carousel',
  perView: 5,
  focusAt: 'center',
  gap: 40,
  breakpoints: {
    1200:{
      perView: 3
    },
    800:{
      perView: 2
    }
  }
});
glideMulti1.mount();
glideMulti2.mount();