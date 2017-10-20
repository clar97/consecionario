$(document).ready(function(){
  $('.parallax').parallax();
});
$(document).ready(function(){
    $('.slider').slider();
  });
  // Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');

$(document).ready(function(){
  $('.carousel').carousel();
});

// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.

// Previous slide
$('.carousel').carousel('prev', 4); // Move prev n times.
$('.carousel').carousel('prev');

// Set to nth slide
$('.carousel').carousel('set', 4);

// Destroy carousel
$('.carousel').carousel('destroy');

$(document).ready(function(){
  $('.carousel').carousel();
});
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3);

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
$('#modal1').modal('open');



