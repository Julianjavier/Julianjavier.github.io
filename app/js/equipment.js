$(document).ready(function() {
	(function(old) {
		$.fn.attr = function() {
			if(arguments.length === 0) {
				if(this.length === 0) {
					return null;
				}

				var obj = {};
				$.each(this[0].attributes, function() {
					if(this.specified) {
						obj[this.name] = this.value;
					}
				});
				return obj;
			}

			return old.apply(this, arguments);
		};
	})($.fn.attr);

	var fitGauge = {
	  init: function(element, value) {

      var container = $(element),
          τ = 2 * Math.PI,
          width = container.width(),
          height = container.height(),
					radius = Math.min(width, height) / 2;
          outerRadius = Math.min(width, height) / 2,
          innerRadius = (outerRadius / 5) * 3.5,
          fontSize = (Math.min(width, height) / 4);//original 4

      var arc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius(outerRadius)
          .startAngle(0);

      var svg = d3.select(element).append("svg")
          .attr("width", '100%')
          .attr("height", '100%')
          .attr('viewBox', '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height))
          .attr('preserveAspectRatio', 'xMinYMin')
          .append("g")
          .attr("transform", "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")");

      var text = svg.append("text")
          .text('0%')
          .attr("text-anchor", "middle")
          .style("font-size", fontSize + 'px')
          .attr("dy", fontSize / 3)//original 3
          .attr("dx", 2)
          .attr("class", "svgInteriorText");

      var background = svg.append("path")
          .datum({
              endAngle: τ
          })
          .style("fill", "#eaf0f6")
          .attr("d", arc)
          .attr("class", "svgInteriorBackground");


      var foreground = svg.append("path")
          .datum({
              endAngle: 0 * τ
          })
          .style("fill", "#87bf4a")
          .attr("d", arc)
          .attr("class", "svgInteriorForground");


      foreground.transition()
          .duration(750)
          .call(arcTween, value * τ);

      function arcTween(transition, newAngle) {
        transition.attrTween("d", function(d) {
          var interpolate = d3.interpolate(d.endAngle, newAngle);
          return function(t) {
              d.endAngle = interpolate(t);
              text.text(Math.round((d.endAngle / τ) * 100) + '%');
              return arc(d);
          };
        });
      }
	  },


	  update: function(element, value) {
			var container = $(element),
					τ = 2 * Math.PI,
					width = container.width(),
					height = container.height(),
					outerRadius = Math.min(width, height) / 2,
					innerRadius = (outerRadius / 5) * 3.5,
					fontSize = (Math.min(width, height) / 4);

     var arc = d3.arc()
         .innerRadius(innerRadius)
         .outerRadius(outerRadius)
         .startAngle(0);

     var content = $(element+' .svgInteriorText');
     var path = $(element+' .svgInteriorForground');
     var foreground = d3.select(path[0]);
     var text = d3.select(content[0]);

     foreground.transition()
         .duration(750)
         .call(arcTween, value * τ);

     function arcTween(transition, newAngle) {
       transition.attrTween("d", function(d) {
         var interpolate = d3.interpolate(d.endAngle, newAngle);
         return function(t) {
           d.endAngle = interpolate(t);
           text.text(Math.round((d.endAngle / τ) * 100) + '%');
           return arc(d);
         };
       });
     }
	  }
	  // end of var
	}


	function getCalulation() {
		var total = $('#equipment .equipmentCol .equipmentcell').length;
		var selected = $('#equipment .equipmentCol .equipmentcell:not(.selected)').length;
		var calculation = selected / total;
		$("#total").html(total);
		$("#selected").html(selected);
		return calculation;
	}

	fitGauge.init('#myTest', getCalulation())


	var equimentList = document.getElementsByClassName('equipmentcell');
	var equimentListArray = Array.prototype.slice.call(equimentList);

	$(".inputText").keyup(function(){
		if ($("#inputBrand").val() != "" && $("#inputEquipment").val() != "") {
			// console.log($("#inputBrand").val());
			// console.log($("#inputEquipment").val());
				$('#equipment .equipmentCol .equipmentcell').each(function(){
					var typeValue = $("#inputEquipment").val();
					var barandValue = $("#inputBrand").val();
					var typeExp = new RegExp('^' + typeValue, 'i');
					var barandExp = new RegExp('^' + barandValue, 'i');

					var typeMatch = typeExp.test(this.dataset.type);
					var barandMatch = barandExp.test(this.dataset.brand);

					if (barandMatch==true && typeMatch==true) {
						$(this).toggle(true);
					} else {
						$(this).toggle(false);
					}
				});
		} else if($("#inputBrand").val() != ""){
			$('#equipment .equipmentCol .equipmentcell').each(function(){
				var barandValue = $("#inputBrand").val();
				var barandExp = new RegExp('^' + barandValue, 'i');
				var barandMatch = barandExp.test(this.dataset.brand);
				if (barandMatch==true) {
					$(this).toggle(true);
				} else {
					$(this).toggle(false);
				}
			});
		} else if($("#inputEquipment").val() != ""){
			$('#equipment .equipmentCol .equipmentcell').each(function(){
				var typeValue = $("#inputEquipment").val();
				var typeExp = new RegExp('^' + typeValue, 'i');
				var typeMatch = typeExp.test(this.dataset.type);
				if (typeMatch==true) {
					$(this).toggle(true);
				} else {
					$(this).toggle(false);
				}
			});
		} else if($("#inputBrand").val() == "" && $("#inputEquipment").val() == ""){
			$('#equipment .equipmentCol .equipmentcell').each(function(){
				$(this).toggle(true);
			});
		}
	})

	$(".equipmentcell").click(function () {
		var postData;
		postData = {"equipment":$(this).attr(), "hotspot":$(this).parent().attr()}
		console.log(postData);
		$(this).toggleClass("selected");//this will be comented out

		// $.ajax({
		// 	url: 'scripts/php/addProductToDistribution.php',
		// 	type: 'POST',
		// 	dataType: 'json',
		// 	data: postData,
		// 	success: function(data) {
		// 		console.log(data);
		// 		if(data.status == 'success'){
		// 			tableResults(element);
		// 			if (data.sudo == "something"){
		// 				$(this).addClass("selected");
		// 			} else if (data.sudo == "something") {
		// 				$(this).removeClass("selected");
		// 			}
		// 		}else if(data.status == 'error'){
		// 				alert("Error on query! Sorry about that.");
		// 		}
		// 	},
		// 	error:function(x,e) {
		// 			if (x.status==0) {
		// 					alert('You are offline!!\n Please Check Your Network.');
		// 			} else if(x.status==404) {
		// 					alert('Requested URL not found.');
		// 			} else if(x.status==500) {
		// 					alert('Internel Server Error.');
		// 			} else if(e=='parsererror') {
		// 					alert('Error.\nParsing JSON Request failed.');
		// 			} else if(e=='timeout'){
		// 					alert('Request Time out.');
		// 			} else {
		// 					alert('Unknow Error.\n'+x.responseText);
		// 			}
		// 	}
		// });
		fitGauge.update('#myTest', getCalulation())
	})
});
