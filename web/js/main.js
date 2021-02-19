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
  $('.materialboxed').materialbox();
  $('.slider').slider();
  $('.venobox').venobox({
    framewidth : '400px',
    frameheight: '500px'
  }); 
});