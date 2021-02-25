document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options);
});

$(document).ready(function(){
  $('.carousel').carousel({
        dist:0,
        shift:0,
        padding:20,
        numVisible: 8
  });
  $('.slider').slider();
<<<<<<< HEAD
  $('.venobox').venobox();
});
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'disableScrolling' : true,
  'fitImagesInViewport': true
})
=======
  $('.venobox').venobox({
    framewidth : '400px',
    frameheight: '500px'
  }); 
});
>>>>>>> 1207010fd94b357e0a87bfd1023fba1dd414dedb
