$(document).ready(function() {
  console.log("jQ ready")

  // draw map
  L.mapbox.accessToken = 'pk.eyJ1IjoicGV0ZXJnY3V0bGVyIiwiYSI6ImNpZWt1MnczdDAwNDJzbW00OGhidXNnenEifQ.Zcv598pJc80mbyWueMSDmw';
  var map = L.mapbox.map('map', 'mapbox.outdoors', { zoomControl: false })
    .setView([33.633, -88.088], 6)

  new L.Control.Zoom({ position: 'topright' }).addTo(map);

  // format API call
  url = $.getJSON("/barbecues").then(function(data){
    var array = []
    data[0].features.forEach(function(dataSet){
      array.push(dataSet.properties)
    })
    voronoiMap(map, array)
    return array
  })

})
