$(document).ready(function(){
  // This is for stacked headers
  $(".navbar .stack .fa-reorder").click(function(){
    console.log(this);
    $(".nav").toggleClass("show");
  });

  //this is for the moblie version of the stacked headers
  $(".navbar .nav li").click(function() {
    var target = this.getElementsByTagName("ul")[0];
    $(target).toggleClass("nav-active");
    console.log(target);
  });

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
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
