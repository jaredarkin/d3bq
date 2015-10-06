window.onload = function() {
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

  voronoiMap = function(map, array) {

    var points = array
    var lastSelectedPoint

    var voronoi = d3.geom.voronoi()
        .x(function(d) { return d.x })
        .y(function(d) { return d.y })

    var selectPoint = function() {
      d3.selectAll('.selected').classed('selected', false)

      var cell = d3.select(this)
      var point = cell.datum()

      lastSelectedPoint = point
      cell.classed('selected', true)

  // includes adding a link to an external source
      d3.select('#selected h1')
        .html('')
        .append('a')
          .text(point.title)
          .attr('href', point.url)
          .attr('target', '_blank')
    }


    // run the map draw and display "drawing" ui element
    var drawWithLoading = function(e){
      d3.select('#loading').classed('visible', true)
      if (e == 'viewreset') {
        d3.select('#overlay').remove()
      }
      setTimeout(function(){
        draw()
        d3.select('#loading').classed('visible', false);
      }, 0)
    }


  // draw the map
    var draw = function() {
      d3.select('#overlay').remove()

      var bounds = map.getBounds(),
          topLeft = map.latLngToLayerPoint(bounds.getNorthWest()),
          bottomRight = map.latLngToLayerPoint(bounds.getSouthEast()),
          existing = d3.set(),
          drawLimit = bounds.pad(0.4)


      // limit points drawn to those in the viewpane for performance
      filteredPoints = points.filter(function(d) {
        var latlng = new L.LatLng(d.latitude, d.longitude)

        if (!drawLimit.contains(latlng)) { return false }

        var point = map.latLngToLayerPoint(latlng)

        key = point.toString()
        if (existing.has(key)) { return false }
        existing.add(key)

        d.x = point.x
        d.y = point.y
        return true
      });

      voronoi(filteredPoints).forEach(function(d) { d.point.cell = d })


  // render the panes and points on the map
      var svg = d3.select(map.getPanes().overlayPane).append("svg")
        .attr('id', 'overlay')
        .attr("class", "leaflet-zoom-hide")
        .style("width", map.getSize().x + 'px')
        .style("height", map.getSize().y + 'px')
        .style("margin-left", topLeft.x + "px")
        .style("margin-top", topLeft.y + "px")

      var g = svg.append("g")
        .attr("transform", "translate(" + (-topLeft.x) + "," + (-topLeft.y) + ")")

      var svgPoints = g.attr("class", "points")
        .selectAll("g")
          .data(filteredPoints)
        .enter().append("g")
          .attr("class", "point");

      var buildPathFromPoint = function(point) {
        return "M" + point.cell.join("L") + "Z"
      }

      svgPoints.append("path")
        .attr("class", "point-cell")
        .attr("d", buildPathFromPoint)
        .on('click', selectPoint)
        .classed("selected", function(d) { return lastSelectedPoint == d} );

      svgPoints.append("circle")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")" })
        .style('fill', function(d) { return '#c0392b' } )
        .attr("r", 2.4)
    }

    // Re-draw the map each time you reset the view's zoom/pan
    var mapLayer = {
      onAdd: function(map) {
        map.on('viewreset moveend', drawWithLoading);
        drawWithLoading()
      }
    }

    // Draw the map on load
    map.on('ready', function() {
        drawWithLoading()
        map.addLayer(mapLayer)
    })
  }
}
