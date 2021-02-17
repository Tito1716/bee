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
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}