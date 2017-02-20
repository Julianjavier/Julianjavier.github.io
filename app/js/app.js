var Store_Type_Number = 14;
var SCV_ID = 32;
var User_Number = 171;

var dataSource = [{"Product_Number":"174","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"161","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"1","Description":"Heineken Green 6 pack 12. oz.","Capacity":"12 oz.","Case_Count":"4","Package_Count":"6","UPC":"72890000217","Product_Alias":"H02","Product_Image":"P827.jpg","Created":"2017-01-27 20:54:47","Updated":"2017-01-27 20:54:47","Company_Number":"9","Product_Company_Number":"400141","Product_Goal_ID":"27254","Stock_Goal":"808888","Facings_Goal":"12888","Min_Price":"7000000","Max_Price":"8888890000","Promo_Price_Goal":"89089080","Effective_Date":"2016-08-18"},{"Product_Number":"420","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"34","Description":"Heineken 12oz SS","Capacity":"SS","Case_Count":"24","Package_Count":"1","UPC":"72890000316","Product_Alias":"H13","Product_Image":"P420.jpg","Created":"2016-03-01 00:00:00","Updated":"2016-03-01 00:00:00","Company_Number":"9","Product_Company_Number":"500141","Product_Goal_ID":"1138","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"2","Max_Price":"2.75","Promo_Price_Goal":" 2 x $4.00 ","Effective_Date":"2016-03-01"},{"Product_Number":"421","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"34","Description":"Heineken 8.5oz SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"573000000000","Product_Alias":"H14","Product_Image":"P421.jpg","Created":"2016-03-01 00:00:00","Updated":"2016-03-01 00:00:00","Company_Number":"9","Product_Company_Number":"500165","Product_Goal_ID":"1157","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"1.25","Max_Price":"1.5","Promo_Price_Goal":" 4 x $5.00 ","Effective_Date":"2016-03-01"},{"Product_Number":"901","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"34","Description":"Heineken Light  12OZ SS","Capacity":"SS","Case_Count":"0","Package_Count":"0","UPC":"0","Product_Alias":"H20","Product_Image":"P852.jpg","Created":"2016-03-01 00:00:00","Updated":"2016-03-01 00:00:00","Company_Number":"9","Product_Company_Number":"500140","Product_Goal_ID":"5936","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"2","Max_Price":"2.75","Promo_Price_Goal":" 2 x $4.00 ","Effective_Date":"2016-03-01"},{"Product_Number":"903","Store_Type_Number":"14","Market_Number":"1","Chain_Number":"39","SCV_ID":"32","Brand_Number":"40","Subbrand_Number":"0","Category_Number":"34","Description":"Heineken LIGHT 8.5OZ SS","Capacity":"SS","Case_Count":"1","Package_Count":"0","UPC":"0","Product_Alias":"H21","Product_Image":"P853.jpg","Created":"2016-03-01 00:00:00","Updated":"2016-03-01 00:00:00","Company_Number":"9","Product_Company_Number":"500393","Product_Goal_ID":"5969","Stock_Goal":"80","Facings_Goal":"1","Min_Price":"1.25","Max_Price":"1.5","Promo_Price_Goal":" 4 x $5.00 ","Effective_Date":"2016-03-01"}];

$(document).ready(function() {
	// Table setup
	// ------------------------------

	// Setting datatable defaults
	$.extend( $.fn.dataTable.defaults, {
			autoWidth: false,
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
			drawCallback: function () {
					$(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
			},
			preDrawCallback: function() {
					$(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
			}
	});

  var table = $('.table').DataTable( {
    data: dataSource,
    columns: [
      {
				title: "SKU",
				data: "Product_Company_Number"
			},
      {
				title: "Name",
				data: "Description"
			},
      {
				title: "MIN",
				data: "Min_Price"
			},
      {
				title: "MAX",
				data:"Max_Price"
			},
      {
				title: "GOAL",
				data: "Promo_Price_Goal"
			},
      {
				title: "Stock Goal",
				data: "Stock_Goal"
			},
			{
				title: "Facing Goal",
				data: "Facings_Goal"
			}
    ],
  } );

	$('.table tbody').on( 'click', 'td', function () {
	  var cellData = table.cell( this ).data();
		var dom = table.cell( this ).node();
		$(dom).addClass('highlight')
		console.log(dom);
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
