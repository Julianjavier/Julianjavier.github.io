var Store_Type_Number = 14;
var SCV_ID = 32;
var User_Number = 171;
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
		var total = $('.dataTables_scrollBody .dataTable tbody tr').length;
		var selected = $('.dataTables_scrollBody .dataTable tbody tr:not(.productSelected)').length;
		var calculation = selected / total;
		$("#total").html(total);
		$("#selected").html(selected);
		return calculation;
	}

	// Table setup
	// ------------------------------

	// Setting datatable defaults
	$.extend( $.fn.dataTable.defaults, {

      columnDefs: [{
          orderable: false,
          width: '100px',
      }],
      dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
      language: {
          search: '<span>Filter:</span> _INPUT_',
          lengthMenu: '<span>Show:</span> _MENU_',
          paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
      },
      initComplete: function () {
          $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
      },
      preinitComplete: function() {
          $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
      }
  });
	////////////////////// THIS IS TO CONFIGURE THE TABLES THAT WE WILL NEED //////////////////////
  var tableBeer = $('.tableBeer').DataTable({
		autoWidth: false, //<---
		colReorder: false,
		scrollX: true,
		scrollY: "300px",
		scrollCollapse: true,
		responsive: true,
		initComplete: function(settings, json) {
			$($.fn.dataTable.tables( true ) ).css('width', '100%');
			$($.fn.dataTable.tables( true ) ).DataTable().columns.adjust().draw();
		}
	});

	var tableSpirits = $('.tableSpirits').DataTable( {
		autoWidth: false, //<---
		colReorder: false,
		scrollX: true,
		scrollY: "300px",
		scrollCollapse: true,
		responsive: true,
		initComplete: function(settings, json) {
			$($.fn.dataTable.tables( true ) ).css('width', '100%');
			$($.fn.dataTable.tables( true ) ).DataTable().columns.adjust().draw();
		}
	} );

	var tableWines = $('.tableWines').DataTable( {
		autoWidth: false, //<---
		scrollX: true,
		scrollY: "300px",
		scrollCollapse: true,
		responsive: true,
		initComplete: function(settings, json) {
			$($.fn.dataTable.tables( true ) ).css('width', '100%');
			$($.fn.dataTable.tables( true ) ).DataTable().columns.adjust().draw();
		}
	} );
	////////////////////// THIS IS TO CONFIGURE THE TABLES THAT WE WILL NEED //////////////////////

	////////////////////// THIS IS FOR HANDELING CLICK EVENTS ON THE TBLE CELLS //////////////////////
	$('.tableBeer tbody').on( 'click', 'td', function () {
	  var cellData = tableBeer.cell( this ).data();
		var dom = tableBeer.cell( this ).node();
		var row = tableBeer.row($(this).parent()).node();
		var postData = {"product":$(row).attr(), "column":$(dom).attr()}
		$.ajax({
      url: 'scripts/php/addProductToDistribution.php',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function(data) {
        console.log(data);
        if(data.status == 'success'){
					if (data.sudo == "something"){
						$(dom).addClass('highlight');
						$(dom.getElementsByTagName("span")[0]).addClass("border-warning text-warning-600 selected");
						$(dom.getElementsByTagName("img")[0]).addClass("showImage");
						$(row).addClass("productSelected");
					} else if (data.sudo == "something") {
						$(dom).removeClass('highlight');
						$(dom.getElementsByTagName("span")[0]).removeClass("border-warning text-warning-600 selected");
						$(dom.getElementsByTagName("img")[0]).removeClass("showImage");
						$(row).removeClass("productSelected");
					}
					fitGauge.update('#myTest', getCalulation())
        }else if(data.status == 'error'){
            alert("Error on query! Sorry about that.");
        }
      },
      error:function(x,e) {
          if (x.status==0) {
              alert('You are offline!!\n Please Check Your Network.');
          } else if(x.status==404) {
              alert('Requested URL not found.');
          } else if(x.status==500) {
              alert('Internel Server Error.');
          } else if(e=='parsererror') {
              alert('Error.\nParsing JSON Request failed.');
          } else if(e=='timeout'){
              alert('Request Time out.');
          } else {
              alert('Unknow Error.\n'+x.responseText);
          }
      }
    });

	} );

	$('.tableSpirits tbody').on( 'click', 'td', function () {
		var cellData = tableSpirits.cell( this ).data();
		var dom = tableSpirits.cell( this ).node();
		var row = tableSpirits.row($(this).parent()).node();
		var postData = {"product":$(row).attr(), "column":$(dom).attr()}
		$.ajax({
      url: 'scripts/php/addProductToDistribution.php',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function(data) {
        console.log(data);
        if(data.status == 'success'){
					$(dom).addClass('highlight');
					$(dom.getElementsByTagName("span")[0]).toggleClass("border-warning text-warning-600 selected");
					$(dom.getElementsByTagName("img")[0]).toggleClass("showImage");
					if ($(row).children().children().hasClass("selected") == true) {
						$(row).addClass("productSelected");
					} else if ($(row).children().children().hasClass("selected") == false) {
						$(row).removeClass("productSelected");
					}
					fitGauge.update('#myTest', getCalulation())
        }else if(data.status == 'error'){
            alert("Error on query! Sorry about that.");
        }
      },
      error:function(x,e) {
          if (x.status==0) {
              alert('You are offline!!\n Please Check Your Network.');
          } else if(x.status==404) {
              alert('Requested URL not found.');
          } else if(x.status==500) {
              alert('Internel Server Error.');
          } else if(e=='parsererror') {
              alert('Error.\nParsing JSON Request failed.');
          } else if(e=='timeout'){
              alert('Request Time out.');
          } else {
              alert('Unknow Error.\n'+x.responseText);
          }
      }
    });
	} );

	$('.tableWines tbody').on( 'click', 'td', function () {
		var cellData = tableWines.cell( this ).data();
		var dom = tableWines.cell( this ).node();
		var row = tableWines.row($(this).parent()).node();
		var postData = {"product":$(row).attr(), "column":$(dom).attr()}
		$.ajax({
      url: 'scripts/php/addProductToDistribution.php',
      type: 'POST',
      dataType: 'json',
      data: postData,
      success: function(data) {
        console.log(data);
        if(data.status == 'success'){
					$(dom).addClass('highlight');
					$(dom.getElementsByTagName("span")[0]).toggleClass("border-warning text-warning-600 selected");
					$(dom.getElementsByTagName("img")[0]).toggleClass("showImage");
					if ($(row).children().children().hasClass("selected") == true) {
						$(row).addClass("productSelected");
					} else if ($(row).children().children().hasClass("selected") == false) {
						$(row).removeClass("productSelected");
					}
					fitGauge.update('#myTest', getCalulation())
        }else if(data.status == 'error'){
            alert("Error on query! Sorry about that.");
        }
      },
      error:function(x,e) {
          if (x.status==0) {
              alert('You are offline!!\n Please Check Your Network.');
          } else if(x.status==404) {
              alert('Requested URL not found.');
          } else if(x.status==500) {
              alert('Internel Server Error.');
          } else if(e=='parsererror') {
              alert('Error.\nParsing JSON Request failed.');
          } else if(e=='timeout'){
              alert('Request Time out.');
          } else {
              alert('Unknow Error.\n'+x.responseText);
          }
      }
    });
	} );
	////////////////////// THIS IS FOR HANDELING CLICK EVENTS ON THE TBLE CELLS //////////////////////


	//////DONT REALLY NEED TO MESS WITH THIS FOR ANY REASON//////
	// External table additions
	// ------------------------------

	// Add placeholder to the datatable filter option
	$('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


	// Enable Select2 select for the length option
	$('.dataTables_length select').select2({
			minimumResultsForSearch: Infinity,
			width: 'auto'
	});


	fitGauge.init('#myTest', getCalulation())

	$(".nav.nav-tabs").click(function() {
		setTimeout(function() {
			tableBeer.columns.adjust().draw();
			tableSpirits.columns.adjust().draw();
			tableWines.columns.adjust().draw();
		}, 1);
	})
});
