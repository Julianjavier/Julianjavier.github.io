$(document).ready(function(){
  $("#target").height( $("#equalizer").height());

  function sortOptions(target) {
    var options = target;
    var arr = options.map(function(_, o) {
      return { t: $(o).text(), v: o.value };
    }).get();
    arr.sort(function(o1, o2) { return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0; });
    options.each(function(i, o) {
      o.value = arr[i].v;
      $(o).text(arr[i].t);
    });
  }

  var form = {
    init: function () {
      this.page = document.querySelector('#addMember');
      this.form = this.page.querySelector('form');
      this.form.addEventListener('submit', this.handleFormSubmit.bind(this), false);
    },

    handleFormSubmit: function(event) {
      // Always prevent the form from submitting for now.
      event.preventDefault();
      $('.activeProperty option').prop("selected", true);
    }

  }

  $('.activeProperty').change(function(){
    var option = $('.activeProperty option:selected');
    $('.activeProperty option[value='+option.val()+']').remove();
    $('.inactiveProperty').append(option[0]);
    $(".activeProperty").val([]);
    sortOptions($('.inactiveProperty option'));
    sortOptions($('.activeProperty option'));
    console.log(option);
  });

  $('.inactiveProperty').change(function(){
    var option = $('.inactiveProperty option:selected');
    $('.inactiveProperty option[value='+option.val()+']').remove();
    $('.activeProperty').append(option[0])
    $(".activeProperty").val([]);
    $(".inactiveProperty").val([]);
    sortOptions($('.inactiveProperty option'));
    sortOptions($('.activeProperty option'));
    // console.log($('.inactiveProperty option').map(function(_, o) { return { t: $(o).text(), v: o.value }; }).get());
  });

  form.init();
});
