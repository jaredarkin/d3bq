$(document).ready(function() {
  console.log("jQ ready")

  // draw map
  L.mapbox.accessToken = 'pk.eyJ1IjoicGV0ZXJnY3V0bGVyIiwiYSI6ImNpZWt1MnczdDAwNDJzbW00OGhidXNnenEifQ.Zcv598pJc80mbyWueMSDmw';
  var map = L.mapbox.map('map', 'mapbox.outdoors')
    .setView([33.633, -88.088], 5)

  var featureLayer = L.mapbox.featureLayer()
    .loadURL('/barbecues')
    .addTo(map);
})
