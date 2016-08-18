$(document).ready(function(){
  L.mapbox.accessToken = 'pk.eyJ1IjoianVsaWFuamF2aWVyIiwiYSI6ImNpcm1vY3lsNTA3YmlmbG04NGkwdjZ1dGEifQ.R58Pa3KgzP6rs-uPTouo8w';
  //set a series of variables for future funtions
  var currentPlots = 0; ///This will record the hidden of plots generated to keep track for this sesion.
  var initialLocation = [18.466421, -66.088192];
  var initialZoomLevel = 17;
  var mapStyle = 'streets-satellite';
  var plots = document.getElementById('plots');
  var measurements = {m: [0.38610, 'miles'], ha: [100, 'ha'], acre:[247.11, 'acres']};
  var newMeasurement = 'km'
  var input = document.getElementById('areas');
  $(input).on('change', function() {
    newMeasurement = this.value;

    map.eachLayer(function(layer) {
      if (layer._popup) {
        currentPlots=0;
        var km = (LGeo.area(layer) / 1000000).toFixed(2);
        var area = km;
        if (newMeasurement != 'km') {
          if (newMeasurement == 'm') {
            area = Math.pow(km, 2) * 0.38610;
            layer._popup.setContent("<p data-id="+currentPlots+">Plot "+currentPlots+"</p>"+"<input type='hidden' name='name' data-id='"+currentPlots+"' value='"+currentPlots+"'>"+"<p>"+area+"m<sup>2</sup></p>");
          }else if (newMeasurement == 'ha') {
            area = km * 100
            layer._popup.setContent("<p data-id="+currentPlots+">Plot "+currentPlots+"</p>"+"<input type='hidden' name='name' data-id='"+currentPlots+"' value='"+currentPlots+"'>"+"<p>"+area+newMeasurement+"</p>");
          }else if(newMeasurement == 'acre'){
            area = Math.pow(km, 2) * 247.11;
            layer._popup.setContent("<p data-id="+currentPlots+">Plot "+currentPlots+"</p>"+"<input type='hidden' name='name' data-id='"+currentPlots+"' value='"+currentPlots+"'>"+"<p>"+area+newMeasurement+"</p>");
          }
        }else {
          layer.bindPopup("<p data-id="+currentPlots+">Plot "+currentPlots+"</p>"+"<input type='hidden' name='name' data-id='"+currentPlots+"' value='"+currentPlots+"'>"+"<p>"+area+"km<sup>2</sup></p>");
        }
        // var contentId = layer._contentNode.querySelector('[data-id]')[0].getAttribute('data-id')
        // console.log(contentId);
      }
    });
    currentPlots++
  });
  //this creates the map view
  var map = L.mapbox.map('mapScript', 'mapbox.'+ mapStyle).setView(initialLocation, initialZoomLevel).addControl(L.mapbox.geocoderControl('mapbox.places', {
        autocomplete: true
  }));


  //this will alter the map style for what the user wants
  var layerList = document.getElementById('menu');
  var inputs = layerList.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = function(){
        mapStyle = this.value;
        L.mapbox.styleLayer('mapbox://styles/mapbox/' + mapStyle + '-v9').addTo(map);
      };
  }

  var featureGroup = L.featureGroup().addTo(map);

  var wildcard;

  var drawControl = new L.Control.Draw({
    edit: {
      featureGroup: featureGroup
    },
    draw: {
      polygon: true,
      polyline: false,
      rectangle: false,
      circle: false,
      marker: false
    }
  }).addTo(map);

  map.on('draw:created', showPolygon);
  map.on('draw:edited', editedPolygon);
  map.on('draw:deleted', logEvent);

  function logEvent(e) {
    e.layers.eachLayer(function(layer) {
      var container = layer._popup._contentNode;
      var id = container.querySelectorAll('[data-id]')[0].getAttribute('data-id');
      var parent = document.getElementById(id);
      $('#'+id).remove()
    });
  }

  function editedPolygon(e) {
    e.layers.eachLayer(function(layer) {
      var container = layer._popup._contentNode;
      var id = container.querySelectorAll('[data-id]')[currentPlots].getAttribute('data-id')
      var shape = layer.toGeoJSON();
      var coordinates = shape.geometry.coordinates;
      var parent = document.getElementById(id);
      $(parent).remove('input[type="hidden"]');

      if (parent){
        for (var i = 0; i < coordinates.length; i++) {
          for (var x = 0; x < coordinates[i].length; x++) {
            $(parent).append('<input type="hidden" name="plots['+id+'][coordinates]['+x+'][lon]" value="'+coordinates[i][x][currentPlots]+'" class="form-control">');
            $(parent).append('<input type="hidden" name="plots['+id+'][coordinates]['+x+'][lat]" value="'+coordinates[i][x][1]+'" class="form-control">');
          }
        }
      }
    });
  }

  function showPolygon(e) {
    //sets basic variable for map polygons
    var layer = e.layer;
    var shape = layer.toGeoJSON();
    var coordinates = shape.geometry.coordinates;
    //set variables for form population to send to database
    var child = '<div id="'+currentPlots+'" class="form-group"></div>'
    var index = '#'+currentPlots.toString()
    $(plots).append(child);


    //this will loop thru the coordinates of the poligons and group them to json objects
    if(child) {
      $(index).append('<input type="text" name="plots['+0+'][plotName]" data-id='+currentPlots+' value="Plot '+currentPlots+'" class="form-control focusOut">');

      //This will litsen for focus out in plot name inputs
      $('.focusOut').focusout(function(){
          content = this.value
          contentId = this.dataset.id;
          console.log(content);
          console.log(contentId);

          map.eachLayer(function(layer) {
            if (layer._popup) {
              if (layer._popup._contentNode.querySelector('[data-id]').getAttribute('data-id') == contentId) {
                layer._popup.setContent("<p data-id="+contentId+">"+content+"</p>"+"<input type='hidden' name='name' data-id='"+contentId+"' value='"+contentId+"'>")
              }
              // var contentId = layer._contentNode.querySelector('[data-id]')[0].getAttribute('data-id')
              // console.log(contentId);
            }
          });
      });

      for (var i = 0; i < shape.geometry.coordinates.length; i++) {
        for (var x = 0; x < coordinates[i].length; x++) {
          $(index).append('<input type="hidden" name="plots['+currentPlots+'][coordinates]['+x+'][lon]" value="'+coordinates[i][x][0]+'" class="form-control">');
          $(index).append('<input type="hidden" name="plots['+currentPlots+'][coordinates]['+x+'][lat]" value="'+coordinates[i][x][1]+'" class="form-control">');
        }
      }
    }

    //This will bind a pop up window for easy identification
    featureGroup.addLayer(e.layer);
    var km = (LGeo.area(e.layer) / 1000000).toFixed(2);
    var area = km;
    if (newMeasurement != 'km') {
      if (newMeasurement == 'm') {
        area = Math.pow(km, 2) * 0.38610;
        e.layer.bindPopup("<p data-id="+currentPlots+">Plot "+currentPlots+"</p>"+"<input type='hidden' name='name' data-id='"+currentPlots+"' value='"+currentPlots+"'>"+"<p>"+area+"m<sup>2</sup></p>");
      }else if (newMeasurement == 'ha') {
        area = km * 100
        e.layer.bindPopup("<p data-id="+currentPlots+">Plot "+currentPlots+"</p>"+"<input type='hidden' name='name' data-id='"+currentPlots+"' value='"+currentPlots+"'>"+"<p>"+area+newMeasurement+"</p>");
      }else if(newMeasurement == 'acre'){
        area = Math.pow(km, 2) * 247.11;
        e.layer.bindPopup("<p data-id="+currentPlots+">Plot "+currentPlots+"</p>"+"<input type='hidden' name='name' data-id='"+currentPlots+"' value='"+currentPlots+"'>"+"<p>"+area+newMeasurement+"</p>");
      }
    }else {
      e.layer.bindPopup("<p data-id="+currentPlots+">Plot "+currentPlots+"</p>"+"<input type='hidden' name='name' data-id='"+currentPlots+"' value='"+currentPlots+"'>"+"<p>"+area+"km<sup>2</sup></p>");
    }

    console.log(km * 100 + ' Hectares'); //Hectares
    console.log(Math.pow(km, 2) * 0.38610 + ' Miles');//Miles
    console.log(Math.pow(km, 2) * 247.11 + ' Acres');//Acres
    e.layer.openPopup();
    currentPlots++
  }

  //Form validator that will prevent default events
  var form = {
    init: function () {
      this.page = document.querySelector('#property');
      this.page.addEventListener('submit', this.handleFormSubmit.bind(this), false);
    },

    handleFormSubmit: function(event) {
      // Always prevent the form from submitting for now.
      event.preventDefault();
      console.log(this);
    }
  }
  form.init();
});
