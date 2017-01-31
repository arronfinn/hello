$(document).ready( funtion() ) {

  $('carouselExampleControls').carousel({
    interval: 2000
  });

  $(".left").click(function(){
      $("#carouselExampleControls").carousel("prev");
  });

  $(".right").click(function(){
      $("#carouselExampleControls").carousel("next");
  });

};
