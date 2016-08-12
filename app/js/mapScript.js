$(document).ready(function(){
  L.mapbox.accessToken = 'pk.eyJ1IjoianVsaWFuamF2aWVyIiwiYSI6ImNpcm1vY3lsNTA3YmlmbG04NGkwdjZ1dGEifQ.R58Pa3KgzP6rs-uPTouo8w';
  //set a series of variables for future funtions
  var initialLocation = [18.466421, -66.088192];
  var initialZoomLevel = 17;
  var mapStyle = 'streets-satellite'
  var plots = document.getElementById('plots');


  var map = L.mapbox.map('mapScript', 'mapbox.'+ mapStyle).setView(initialLocation, initialZoomLevel);

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

  map.on('draw:created', showPolygonArea);
  map.on('draw:edited', showPolygonAreaEdited);

  function showPolygonAreaEdited(e) {
    e.layers.eachLayer(function(layer) {
      showPolygonArea({ layer: layer });
    });
  }

  function showPolygonArea(e) {
    //sets basic variable for map polygons
    var layer = e.layer;
    var shape = layer.toGeoJSON();
    var coordinates = shape.geometry.coordinates;
    //set variables form population to database
    var currentPlots = $(plots).children().length;
    var child = '<div id="'+currentPlots+'" class="form-group"></div>'
    var index = '#'+currentPlots.toString()
    $(plots).append(child);

    //this will loop thru the coordinates of the poligons and group them to json objects
    if(child) {
      console.log(true);
      $(index).append('<input type="text" name="plots['+currentPlots+'][plotName]" value="Plot '+currentPlots+'" class="form-control">');
      for (var i = 0; i < shape.geometry.coordinates.length; i++) {
        console.log(coordinates[i]);
        for (var x = 0; x < coordinates[i].length; x++) {
          console.log(coordinates[i][x]);
          $(index).append('<input type="hidden" name="plots['+currentPlots+'][coordinates]['+x+'][lon]" value="'+coordinates[i][x][0]+'" class="form-control">');
          $(index).append('<input type="hidden" name="plots['+currentPlots+'][coordinates]['+x+'][lat]" value="'+coordinates[i][x][1]+'" class="form-control">');
        }
      }
    }
    featureGroup.addLayer(e.layer);
  }

  // var form = {
  //   init: function () {
  //     this.page = document.querySelector('#property');
  //     this.page.addEventListener('submit', this.handleFormSubmit.bind(this), false);
  //   },
  //
  //   handleFormSubmit: function(event) {
  //     // Always prevent the form from submitting for now.
  //     event.preventDefault();
  //     console.log(this);
  //   }
  // }
  //
  // form.init();

});
