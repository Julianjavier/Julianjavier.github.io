var Store_Type_Number = 14;
var SCV_ID = 32;
var User_Number = 171;
var basicTable = [
	{"clients":"Costumer 1", "Venta Año Pasado Current Month":"0.1", "Current-1":"0.2", "Current-2":"0.3", "Current-3":"0.2",},
	{"clients":"Costumer 2", "Venta Año Pasado Current Month":"0.2", "Current-1":"0.1", "Current-2":"0.4", "Current-3":"0",},
	{"clients":"Costumer 3", "Venta Año Pasado Current Month":"0.7", "Current-1":"0.3", "Current-2":"0.1", "Current-3":"0.2",},
]
var totalHits = 0;

$(document).ready(function() {
	function setNewTotalHits(){
		var salesPlan = parseFloat($("#salesPlan").html()),
				promoBeer = parseFloat($("#promoBeer").html()),
				promoLiquor = parseFloat($("#promoLiquor").html()),
				Delist = parseFloat($("#Delist").html()),
				additionalEfforts = parseFloat($("#additionalEfforts").html()),
				actualSales = parseFloat($("#actualSales").html()),
				calculatedResults = parseFloat((totalHits + promoBeer + promoLiquor + Delist + additionalEfforts).toFixed(1)),
				forcast = actualSales+calculatedResults

		$("#totalHits").html("");
		$("#totalHits").html(totalHits.toFixed(1));
		$("#result").html(calculatedResults);
		$("#porVender").html(calculatedResults);
		$("#salesForcast").html(forcast);
		$("#hours-available-progress").html("");
		progressCounter('#hours-available-progress', 15, 2, "#9CCC65", (forcast/salesPlan), "icon-coin-dollar text-green-400", 'SALES', '')
	}

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

	var table = $('.tableBasic').DataTable( {
		// ajax:{
		// 	url: 'scripts/php/getProduct.php?SCV_ID='+32+'&User_Number='+User_Number+'&Store_Type_Number='+Store_Type_Number,
		// 	dataSrc:""
		// },
		data:basicTable,
		columnDefs: [
			{
				title: "Clients",
			},
			{
				title: "Venta Año Pasado Current Month",
			},
			{
				title: "Current-1",
			},
			{
				title: "Current-2",
			},
			{
				title: "Current-3",
			}
		],
		columns: [
			{
				title: "Clients",
				data: "clients",
				render : function ( data, type, full ) {
					return "<span style='padding-right:25px;' class='label label-flat text-primary-600'>"+full['clients']+" <img src='app/img/War-Cross-Mark-PNG-Picture.png'></span>";
				}
			},
			{
				title: "Venta Año Pasado Current Month",
				data: "Venta Año Pasado Current Month",
				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'> <img style='left:0;' src='app/img/War-Cross-Mark-PNG-Picture.png'>"+full['Venta Año Pasado Current Month']+"</span>";
				}
			},
			{
				title: "Current-1",
				data:"Current-1",
				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'> <img style='left:0;' src='app/img/War-Cross-Mark-PNG-Picture.png'>"+full['Current-1']+"</span>";
				}
			},
			{
				title: "Current-2",
				data:"Current-2",
				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'><img style='left:0;' src='app/img/War-Cross-Mark-PNG-Picture.png'>"+full['Current-2']+"</span>";
				}
			},
			{
				title: "Current-3",
				data:"Current-3",
				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'><img style='left:0;' src='app/img/War-Cross-Mark-PNG-Picture.png'>"+full['Current-3']+"</span>";
				}
			}
		],
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

	$('.tableBasic tbody').on( 'click', 'td', function () {
		var colIdx = table.cell(this).index().column;
		$( table.column(colIdx).nodes()).find( "span" ).removeClass("border-warning text-warning-600")
		$( table.column(colIdx).nodes()).find( "img" ).removeClass("showImage")

		var dom = table.cell( this ).node();
		$(dom).addClass('highlight');
		$(dom.getElementsByTagName("span")[0]).toggleClass("border-warning text-warning-600");
		$(dom.getElementsByTagName("img")[0]).toggleClass("showImage");

		totalHits += parseFloat(table.cell(this).data());

		setNewTotalHits()
	} );

	// External table additions
	// ------------------------------

	// Add placeholder to the datatable filter option
	$('.dataTables_filter input[type=search]').attr('placeholder','Type to filter...');


	// Enable Select2 select for the length option
	$('.dataTables_length select').select2({
			minimumResultsForSearch: Infinity,
			width: 'auto'
	});


	////// click for tabs /////
	$('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
			// var target = $(e.target).attr("href"); // activated tab
			// alert (target);
			$($.fn.dataTable.tables( true ) ).css('width', '100%');
			$($.fn.dataTable.tables( true ) ).DataTable().columns.adjust().draw();
	} );


	// Animated progress chart
	// ------------------------------

	// Initialize charts
	progressCounter('#hours-available-progress', 17, 2, "#9CCC65", 0.93, "icon-coin-dollar text-green-400", 'SALES', '')

	// Chart setup
	function progressCounter(element, radius, border, color, end, iconClass, textTitle, textAverage){


			// Basic setup
			// ------------------------------

			// Main variables
			var d3Container = d3.select(element),
					startPercent = 0,
					iconSize = radius,
					endPercent = end,
					twoPi = Math.PI * 2,
					formatPercent = d3.format('.0%'),
					boxSize = radius * 2;

			// Values count
			var count = Math.abs((endPercent - startPercent) / 0.01);

			// Values step
			var step = endPercent < startPercent ? -0.01 : 0.01;



			// Create chart
			// ------------------------------

			// Add SVG element
			var container = d3Container.append('svg');

			// Add SVG group
			var svg = container
					.attr('width', boxSize)
					.attr('height', boxSize)
					.append('g')
							.attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');



			// Construct chart layout
			// ------------------------------

			// Arc
			var arc = d3.svg.arc()
					.startAngle(0)
					.innerRadius(radius)
					.outerRadius(radius - border);



			//
			// Append chart elements
			//

			// Paths
			// ------------------------------

			// Background path
			svg.append('path')
					.attr('class', 'd3-progress-background')
					.attr('d', arc.endAngle(twoPi))
					.style('fill', '#eee');

			// Foreground path
			var foreground = svg.append('path')
					.attr('class', 'd3-progress-foreground')
					.attr('filter', 'url(#blur)')
					.style('fill', color)
					.style('stroke', color);

			// Front path
			var front = svg.append('path')
					.attr('class', 'd3-progress-front')
					.style('fill', color)
					.style('fill-opacity', 1);



			// Text
			// ------------------------------

			// Percentage text value
			var numberText = d3.select(element)
					.append('h2')
							.attr('class', 'mt-15 mb-5')

			// Icon
			d3.select(element)
					.append("i")
							.attr("class", iconClass + " counter-icon")
							.attr('style', 'top: ' + ((boxSize - iconSize) / 2) + 'px;' + 'font-size: ' + iconSize + 'px;' + 'margin-left: -'+ ((boxSize - iconSize) / 2) +'px;');


			// Title
			d3.select(element)
					.append('div')
							.text(textTitle);

			// Subtitle
			d3.select(element)
					.append('div')
							.attr('class', 'text-size-small text-muted')
							.text(textAverage);



			// Animation
			// ------------------------------

			// Animate path
			function updateProgress(progress) {
					foreground.attr('d', arc.endAngle(twoPi * progress));
					front.attr('d', arc.endAngle(twoPi * progress));
					numberText.text(formatPercent(progress));
			}

			// Animate text
			var progress = startPercent;
			(function loops() {
					updateProgress(progress);
					if (count > 0) {
							count--;
							progress += step;
							setTimeout(loops, 10);
					}
			})();
	}
});
