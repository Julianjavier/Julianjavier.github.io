$(document).ready(function() {

  $("#storeValidationsButton").click(function(e){
    $("#storeValidationsButton").toggleClass("obscure");
    $("#storeValidations").toggleClass("obscure");
  });

	var storeList = document.getElementsByClassName('equipmentcell');
	var storeListArray = Array.prototype.slice.call(storeList);

	$( "#storeString" ).keyup(function() {
		var value = $(this).val();
    var exp = new RegExp('^' + value, 'i');

		$('.store').each(function() {
	    var isMatch = exp.test(this.dataset.string);
      console.log(isMatch);
	    $(this).toggle(isMatch);
    });
	});
});
