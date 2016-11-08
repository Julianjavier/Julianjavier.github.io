$(document).ready(function(){
  // This is for stacked headers
  $(".navbar .stack .fa-reorder").click(function(){
    console.log(this);
    $(".nav").toggleClass("show");
  });

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        console.log(this);
          $(".navbar").addClass("changeHeader");
          $(".droneOperators").addClass("displayNone");
          $(".navbar .navbar-brand img").attr("src","img/uav-iq-precision-agriculture-logo-horizontal.png");
      } else {
          $(".navbar").removeClass("changeHeader");
          $(".droneOperators").removeClass("displayNone");
          $(".navbar .navbar-brand img").attr("src","img/uav-iq-precision-agriculture-logo-horizontal_white.png");
      }
  });
})
