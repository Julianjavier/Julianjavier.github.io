var Store_Type_Number = 14;
var SCV_ID = 32;
var User_Number = 171;

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
		ajax:{
			url: 'scripts/php/getProduct.php?SCV_ID='+SCV_ID+'&User_Number='+User_Number+'&Store_Type_Number='+Store_Type_Number,
			dataSrc:""
		},
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
