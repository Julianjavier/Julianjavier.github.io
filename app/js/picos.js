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

  // Table setup
  // ------------------------------

  // Setting datatable defaults
  $.extend( $.fn.dataTable.defaults, {

      columnDefs: [{
          orderable: false,
          width: '100px',
          targets: [ 5 ]
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

  var table = $('.tableBasic').DataTable({
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

  // External table additions
  // ------------------------------

  // Add placeholder to the datatable filter option
  $('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


  // Enable Select2 select for the length option
  $('.dataTables_length select').select2({
      minimumResultsForSearch: Infinity,
      width: 'auto'
  });

  function setUpStartOverview() {
    var total = $("tbody tr").length
    var picosToDo = $("tbody tr.error").length;
    var picosDone = $("tbody tr:not(.error)").length;

    $("#totalStores span").html($("tbody tr").length);
    $("#picosDone span").html(picosDone);
    $(".valuesStack #picosTodo span").html(picosToDo);
    $(".resultStack #estimate span").html(picosDone);
    $(".resultStack #diffrence span").html(parseInt(total) - parseInt(picosDone));
  }

  setUpStartOverview()


  function tableResults(element) {
    console.log($(element).parent().parent());
    if ($(element).prop('className') == "checked") {
      var currentVal = parseInt($(".resultStack #picosTodo span").html()) + 1;
      $(".resultStack #picosTodo span").html(currentVal);
    } else {
      var currentVal = parseInt($(".resultStack #picosTodo span").html()) - 1;
      $(".resultStack #picosTodo span").html(currentVal);
    }

    $(".resultStack #estimate span").html(parseInt($(".resultStack #picosDone span").html()) + parseInt($(".resultStack #picosTodo span").html()));
    $(".resultStack #diffrence span").html(parseInt($(".resultStack #totalStores span").html()) - parseInt($(".resultStack #estimate span").html()));
    var calc = parseInt($(".resultStack #estimate span").html()) / parseInt($(".resultStack #totalStores span").html());
    fitGauge.update('#myTest', calc);
  }

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
    var total = parseFloat($('#totalStores span').html());
    var selected = parseFloat($('#picosDone span').html());
    var calculation = selected / total;
    return calculation;
  }

  fitGauge.init('#initGuage', getCalulation());
  fitGauge.init('#myTest', getCalulation());

  ////////////////////// THIS IS FOR HANDELING CLICK EVENTS ON THE TBLE CELLS //////////////////////
  $('body').on('click', '.checker span', function() {
    var postData;
    var element = this;
    tableResults(element);
    var td = $(element).parent().parent().attr();
    var tr = $(element).parent().parent().parent().attr();
    postData = {"product":tr, "status":td}
    ////////////////////// THIS IS OUR AJAX THE DATA BEING PASSED IN IS FROM THE postData VARIABLE//////////////////////
    // $.ajax({
    //   url: 'scripts/php/addProductToDistribution.php',
    //   type: 'POST',
    //   dataType: 'json',
    //   data: postData,
    //   success: function(data) {
    //     console.log(data);
    //     if(data.status == 'success'){
    //       tableResults(element);
    //     }else if(data.status == 'error'){
    //         alert("Error on query! Sorry about that.");
    //     }
    //   },
    //   error:function(x,e) {
    //       if (x.status==0) {
    //           alert('You are offline!!\n Please Check Your Network.');
    //       } else if(x.status==404) {
    //           alert('Requested URL not found.');
    //       } else if(x.status==500) {
    //           alert('Internel Server Error.');
    //       } else if(e=='parsererror') {
    //           alert('Error.\nParsing JSON Request failed.');
    //       } else if(e=='timeout'){
    //           alert('Request Time out.');
    //       } else {
    //           alert('Unknow Error.\n'+x.responseText);
    //       }
    //   }
    // });
  });
  ////////////////////// THIS IS FOR HANDELING CLICK EVENTS ON THE TBLE CELLS //////////////////////


  // Checkboxes/radios (Uniform)
  // ------------------------------

  // Default initialization
  $(".styled, .multiselect-container input").uniform({
      radioClass: 'choice'
  });

  // File input
  $(".file-styled").uniform({
      wrapperClass: 'bg-blue',
      fileButtonHtml: '<i class="icon-file-plus"></i>'
  });


  //
  // Contextual colors
  //

  // Primary
  $(".control-primary").uniform({
      radioClass: 'choice',
      wrapperClass: 'border-primary-600 text-primary-800'
  });

  // Danger
  $(".control-danger").uniform({
      radioClass: 'choice',
      wrapperClass: 'border-danger-600 text-danger-800'
  });

  // Success
  $(".control-success").uniform({
      radioClass: 'choice',
      wrapperClass: 'border-success-600 text-success-800'
  });

  // Warning
  $(".control-warning").uniform({
      radioClass: 'choice',
      wrapperClass: 'border-warning-600 text-warning-800'
  });

  // Info
  $(".control-info").uniform({
      radioClass: 'choice',
      wrapperClass: 'border-info-600 text-info-800'
  });

  // Custom color
  $(".control-custom").uniform({
      radioClass: 'choice',
      wrapperClass: 'border-indigo-600 text-indigo-800'
  });

});
