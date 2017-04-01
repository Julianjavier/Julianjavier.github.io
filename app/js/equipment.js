$(document).ready(function() {

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
	// var string = "foo",
  //   substring = "oo";
	// console.log(string.indexOf(substring) !== -1);

	$( "#inputBrand" ).keyup(function() {
		var value = $(this).val();
    var exp = new RegExp('^' + value, 'i');

		$('#equipment .equipmentCol .equipmentcell').each(function() {
	    var isMatch = exp.test(this.dataset.brand);
	    $(this).toggle(isMatch);
    });
	});

	$( "#inputEquipment" ).keyup(function() {
		var value = $(this).val();
		var exp = new RegExp('^' + value, 'i');

		$('#equipment .equipmentCol .equipmentcell').each(function() {
			var isMatch = exp.test(this.dataset.type);
			$(this).toggle(isMatch);
		});
	});

	$(".equipmentcell").click(function () {
		$(this).toggleClass("selected");
		fitGauge.update('#myTest', getCalulation())
	})
});
