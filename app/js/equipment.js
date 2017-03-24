$(document).ready(function() {

	var equimentList = document.getElementsByClassName('equipmentcell');
	var equimentListArray = Array.prototype.slice.call(equimentList);
	// var string = "foo",
  //   substring = "oo";
	// console.log(string.indexOf(substring) !== -1);

	$( "#inputSting" ).keyup(function() {
		if (this.value != "") {
			$('.equipmentcell').css("display","none")
			var substring = this.value;
			equimentListArray.forEach(function(e){
				if (e.dataset.brand.indexOf(substring) !== -1 || e.dataset.type.indexOf(substring) !== -1) {
					console.log(e);
					$(e).css("display","block")
				}
			})
		}
	});

	$(".equipmentcell").click(function () {
		$(this).toggleClass("selected")
	})
});
