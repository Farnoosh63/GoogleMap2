var initMap = require("./../js/map.js").initMap;
var toggleStreetView = require("./../js/map.js").toggleStreetView;
var deleteMarkers = require("./../js/map.js").deleteMarkers;
$(document).ready(function() {

  $(window).load(initMap);
  $("#toggleView").click(toggleStreetView);
  $("#deleteMarkers").click(deleteMarkers);
});
