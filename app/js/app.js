var Store_Type_Number = 14;
var SCV_ID = 32;
var User_Number = 171;
var beerSource = [{"Product_Number":"174","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"161","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"1","Description":"Heineken Green 6 pack 12. oz.","Capacity":"12 oz.","Case_Count":"4","Package_Count":"6","UPC":"72890000217","Product_Alias":"H02","Product_Image":"P827.jpg","Created":"2017-01-27 20:54:47","Updated":"2017-01-27 20:54:47","Company_Number":"9","Product_Company_Number":"400141","Product_Goal_ID":"27254","Stock_Goal":"808888","Facings_Goal":"12888","Min_Price":"7","Max_Price":"8","Promo_Price_Goal":"2 X $4.00","Effective_Date":"2016-08-18"},{"Product_Number":"420","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"34","Description":"Heineken 12oz SS","Capacity":"SS","Case_Count":"24","Package_Count":"1","UPC":"72890000316","Product_Alias":"H13","Product_Image":"P420.jpg","Created":"2016-03-01 00:00:00","Updated":"2016-03-01 00:00:00","Company_Number":"9","Product_Company_Number":"500141","Product_Goal_ID":"1138","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"2","Max_Price":"2.75","Promo_Price_Goal":" 2 x $4.00 ","Effective_Date":"2016-03-01"},{"Product_Number":"421","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"34","Description":"Heineken 8.5oz SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"573000000000","Product_Alias":"H14","Product_Image":"P421.jpg","Created":"2016-03-01 00:00:00","Updated":"2016-03-01 00:00:00","Company_Number":"9","Product_Company_Number":"500165","Product_Goal_ID":"1157","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"1.25","Max_Price":"1.5","Promo_Price_Goal":" 4 x $5.00 ","Effective_Date":"2016-03-01"},{"Product_Number":"901","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"34","Description":"Heineken Light  12OZ SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"0","Product_Alias":"H20","Product_Image":"P852.jpg","Created":"2016-03-01 00:00:00","Updated":"2016-03-01 00:00:00","Company_Number":"9","Product_Company_Number":"500140","Product_Goal_ID":"5936","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"2","Max_Price":"2.75","Promo_Price_Goal":" 2 x $4.00 ","Effective_Date":"2016-03-01"},{"Product_Number":"903","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"34","Description":"Heineken LIGHT 8.5OZ SS","Capacity":"SS","Case_Count":"1","Package_Count":"0","UPC":"0","Product_Alias":"H21","Product_Image":"P853.jpg","Created":"2016-03-01 00:00:00","Updated":"2016-03-01 00:00:00","Company_Number":"9","Product_Company_Number":"500393","Product_Goal_ID":"5969","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"1.25","Max_Price":"1.5","Promo_Price_Goal":" 4 x $5.00 ","Effective_Date":"2016-03-01"}];
var spiritsSource = [{"Product_Number":"179","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"51","Subbrand_Number":"0","Category_Number":"2","Description":"Grey Goose Vodka 750 ml.","Capacity":"750ml.","Case_Count":"12","Package_Count":"6","UPC":"80480280000","Product_Alias":"GG02","Product_Image":"P179.jpg","Created":"2015-09-01 00:00:00","Updated":"2015-09-01 00:00:00","Company_Number":"9","Product_Company_Number":"","Product_Goal_ID":"74","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"35.99","Max_Price":"38.99","Promo_Price_Goal":"","Effective_Date":"2015-09-01"},{"Product_Number":"212","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"57","Subbrand_Number":"0","Category_Number":"2","Description":"Buchannan 12 750ml.","Capacity":"750ml.","Case_Count":"12","Package_Count":"1","UPC":"88110955328","Product_Alias":"B01","Product_Image":"P212.jpg","Created":"2015-09-01 00:00:00","Updated":"2015-09-01 00:00:00","Company_Number":"9","Product_Company_Number":"400713","Product_Goal_ID":"173","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"32.49","Max_Price":"34.49","Promo_Price_Goal":"","Effective_Date":"2015-09-01"},{"Product_Number":"427","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"56","Subbrand_Number":"0","Category_Number":"33","Description":"Tanqueray Ginebra 12\/750 ml. SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"413050","Product_Alias":"T03","Product_Image":"P210.jpg","Created":"2016-02-29 00:00:00","Updated":"2016-02-29 00:00:00","Company_Number":"9","Product_Company_Number":"513050","Product_Goal_ID":"1206","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"8","Max_Price":"10","Promo_Price_Goal":"","Effective_Date":"2016-02-29"},{"Product_Number":"446","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"51","Subbrand_Number":"0","Category_Number":"33","Description":"Grey Goose Vodka SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"580000000000","Product_Alias":"GG10","Product_Image":"P179.jpg","Created":"2016-03-01 00:00:00","Updated":"2016-03-01 00:00:00","Company_Number":"9","Product_Company_Number":"","Product_Goal_ID":"1406","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"6","Max_Price":"8","Promo_Price_Goal":" $5-$6 ","Effective_Date":"2016-03-01"},{"Product_Number":"453","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"74","Subbrand_Number":"0","Category_Number":"33","Description":"Ketel One SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"400708","Product_Alias":"K04","Product_Image":"p392.jpg","Created":"2016-02-29 00:00:00","Updated":"2016-02-29 00:00:00","Company_Number":"9","Product_Company_Number":"500708","Product_Goal_ID":"1490","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"8","Max_Price":"12","Promo_Price_Goal":"","Effective_Date":"2016-02-29"},{"Product_Number":"456","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"53","Subbrand_Number":"0","Category_Number":"33","Description":"Stolichnaya Vodka  12\/750 ml SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"400647","Product_Alias":"S02","Product_Image":"P181.jpg","Created":"2016-02-29 00:00:00","Updated":"2016-02-29 00:00:00","Company_Number":"9","Product_Company_Number":"500647","Product_Goal_ID":"1534","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"8","Max_Price":"10","Promo_Price_Goal":"$6.00","Effective_Date":"2016-02-29"},{"Product_Number":"458","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"73","Subbrand_Number":"0","Category_Number":"33","Description":"JW Black Whisky SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"413000","Product_Alias":"JW010","Product_Image":"p386.jpg","Created":"2016-02-29 00:00:00","Updated":"2016-02-29 00:00:00","Company_Number":"9","Product_Company_Number":"513000","Product_Goal_ID":"1569","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"8","Max_Price":"10","Promo_Price_Goal":"","Effective_Date":"2016-02-29"},{"Product_Number":"462","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"57","Subbrand_Number":"0","Category_Number":"33","Description":"Buchanans 12 YO SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"","Product_Alias":"B03","Product_Image":"P212.jpg","Created":"2016-02-29 00:00:00","Updated":"2016-02-29 00:00:00","Company_Number":"9","Product_Company_Number":"500713","Product_Goal_ID":"1627","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"8","Max_Price":"10","Promo_Price_Goal":"","Effective_Date":"2016-02-29"},{"Product_Number":"954","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"185","Subbrand_Number":"0","Category_Number":"2","Description":"Titos Vodka 750.ml","Capacity":"750.ml","Case_Count":"0","Package_Count":"0","UPC":"000000","Product_Alias":"T01","Product_Image":"","Created":"2016-03-17 19:09:25","Updated":"2016-03-17 19:09:25","Company_Number":"9","Product_Company_Number":"","Product_Goal_ID":"6034","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"15","Max_Price":"20","Promo_Price_Goal":"","Effective_Date":"2016-03-01"},{"Product_Number":"955","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"35","Brand_Number":"185","Subbrand_Number":"0","Category_Number":"33","Description":"Titos Vodka SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"000000","Product_Alias":"T02","Product_Image":"","Created":"2016-03-18 12:47:56","Updated":"2016-03-18 12:47:56","Company_Number":"9","Product_Company_Number":"","Product_Goal_ID":"6047","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"6","Max_Price":"8","Promo_Price_Goal":" $5-$6 ","Effective_Date":"2016-03-01"}]
var spiritsWines = []
$(document).ready(function() {

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

  var tableBeer = $('.tableBeer').DataTable( {
		// ajax:{
		// 	url: 'scripts/php/getProduct.php?SCV_ID='+32+'&User_Number='+User_Number+'&Store_Type_Number='+Store_Type_Number,
		// 	dataSrc:""
		// },
		data:beerSource,
		columnDefs: [
			{
				title: "SKU / Name",
			},
			{
				title: "MIN",
			},
			{
				title: "MAX",
			},
			{
				title: "Promo Price Goal",
			}
		],
		columns: [
			{
				title: "SKU / Name",
				data: "Product_Company_Number",

				render : function ( data, type, full ) {
					return "<span style='padding-right:25px;' class='label label-flat text-primary-600'>"+full['Product_Company_Number']+" || "+full['Description']+" <img src='./app/img/War-Cross-Mark-PNG-Picture.png'></span>";
				}
			},
			{
				title: "MIN",
				data: "Min_Price",

				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'> <img style='left:0;' src='./app/img/War-Cross-Mark-PNG-Picture.png'>"+"$"+full['Min_Price']+"</span>";
				}
			},
			{
				title: "MAX",
				data:"Max_Price",

				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'> <img style='left:0;' src='./app/img/War-Cross-Mark-PNG-Picture.png'>"+"$"+full['Max_Price']+"</span>";
				}
			},
			{
				title: "Promo Price Goal",
				data:"Promo_Price_Goal",

				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'><img style='left:0;' src='./app/img/War-Cross-Mark-PNG-Picture.png'>"+full['Promo_Price_Goal']+"</span>";
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

	var tableSpirits = $('.tableSpirits').DataTable( {
		// ajax:{
		// 	url: 'scripts/php/getProduct.php?SCV_ID='+32+'&User_Number='+User_Number+'&Store_Type_Number='+Store_Type_Number,
		// 	dataSrc:""
		// },
		data:spiritsSource,
		columnDefs: [
			{
				title: "SKU / Name",
			},
			{
				title: "MIN",
			},
			{
				title: "MAX",
			},
			{
				title: "Promo Price Goal",
			}
		],
		columns: [
			{
				title: "SKU / Name",
				data: "Product_Company_Number",

				render : function ( data, type, full ) {
					return "<span style='padding-right:25px;' class='label label-flat text-primary-600'>"+full['Product_Company_Number']+" || "+full['Description']+" <img src='./app/img/War-Cross-Mark-PNG-Picture.png'></span>";
				}
			},
			{
				title: "MIN",
				data: "Min_Price",

				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'> <img style='left:0;' src='./app/img/War-Cross-Mark-PNG-Picture.png'>"+"$"+full['Min_Price']+"</span>";
				}
			},
			{
				title: "MAX",
				data:"Max_Price",

				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'> <img style='left:0;' src='./app/img/War-Cross-Mark-PNG-Picture.png'>"+"$"+full['Max_Price']+"</span>";
				}
			},
			{
				title: "Promo Price Goal",
				data:"Promo_Price_Goal",

				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'><img style='left:0;' src='./app/img/War-Cross-Mark-PNG-Picture.png'>"+full['Promo_Price_Goal']+"</span>";
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

	var tableWines = $('.tableWines').DataTable( {
		// ajax:{
		// 	url: 'scripts/php/getProduct.php?SCV_ID='+32+'&User_Number='+User_Number+'&Store_Type_Number='+Store_Type_Number,
		// 	dataSrc:""
		// },
		data:spiritsWines,
		columnDefs: [
			{
				title: "SKU / Name",
			},
			{
				title: "MIN",
			},
			{
				title: "MAX",
			},
			{
				title: "Promo Price Goal",
			}
		],
		columns: [
			{
				title: "SKU / Name",
				data: "Product_Company_Number",

				render : function ( data, type, full ) {
					return "<span style='padding-right:25px;' style='padding-right:20px;' class='label label-flat text-primary-600'>"+full['Product_Company_Number']+" || "+full['Description']+" <img src='./app/img/War-Cross-Mark-PNG-Picture.png'></span>";
				}
			},
			{
				title: "MIN",
				data: "Min_Price",

				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'> <img style='left:0;' src='./app/img/War-Cross-Mark-PNG-Picture.png'>"+"$"+full['Min_Price']+"</span>";
				}
			},
			{
				title: "MAX",
				data:"Max_Price",

				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'> <img style='left:0;' src='./app/img/War-Cross-Mark-PNG-Picture.png'>"+"$"+full['Max_Price']+"</span>";
				}
			},
			{
				title: "Promo Price Goal",
				data:"Promo_Price_Goal",

				render : function ( data, type, full ) {
					return "<span style='padding-left:25px;' class='label label-flat text-primary-600'><img style='left:0;' src='./app/img/War-Cross-Mark-PNG-Picture.png'>"+full['Promo_Price_Goal']+"</span>";
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

	$('.tableBeer tbody').on( 'click', 'td', function () {
	  var cellData = tableBeer.cell( this ).data();
		var dom = tableBeer.cell( this ).node();
		$(dom).addClass('highlight');
		$(dom.getElementsByTagName("span")[0]).toggleClass("border-warning text-warning-600");
		$(dom.getElementsByTagName("img")[0]).toggleClass("showImage")
	} );

	$('.tableSpirits tbody').on( 'click', 'td', function () {
		var cellData = tableSpirits.cell( this ).data();
		var dom = tableSpirits.cell( this ).node();
		$(dom).addClass('highlight');
		$(dom.getElementsByTagName("span")[0]).toggleClass("border-warning text-warning-600");
		$(dom.getElementsByTagName("img")[0]).toggleClass("showImage")
	} );

	$('.tableWines tbody').on( 'click', 'td', function () {
		var cellData = tableWines.cell( this ).data();
		var dom = tableWines.cell( this ).node();
		$(dom).addClass('highlight');
		$(dom.getElementsByTagName("span")[0]).toggleClass("border-warning text-warning-600");
		$(dom.getElementsByTagName("img")[0]).toggleClass("showImage")
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
});
