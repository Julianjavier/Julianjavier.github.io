$(document).ready(function(){
  // This is for stacked headers
  $(".navbar .stack .fa-reorder").click(function(){
    console.log(this);
    $(".nav").toggleClass("show");
  });
})
