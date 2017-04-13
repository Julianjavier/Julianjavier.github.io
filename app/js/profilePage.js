$(document).ready(function() {

  $("#storeValidationsButton").click(function(e){
    $("#storeValidationsButton").toggleClass("obscure");
    $("#storeValidations").toggleClass("obscure");
  });

	var storeList = document.getElementsByClassName('equipmentcell');
	var storeListArray = Array.prototype.slice.call(storeList);

	$( "#storeString" ).keyup(function() {
		var value = $(this).val();

		$('.store').each(function() {
      if (~this.dataset.string.indexOf(value)) {
        console.log('its a show');
        $(this).show();
      } else {
        console.log('its a hide');
        $(this).hide();
      }
	    // var isMatch = exp.test(this.dataset.string);
      // console.log(isMatch);
    });
	});
});
