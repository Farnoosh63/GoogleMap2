var initMap = require("./../js/map.js").initMap;
var toggleStreetView = require("./../js/map.js").toggleStreetView;

$(document).ready(function() {

  $(window).load(initMap);
  $("#toggleView").click(toggleStreetView);
  // $("#clearMarkers").click(clearMarkers);
  $("#deleteMarkers").click(deleteMarkers);
});
