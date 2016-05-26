var map = require("../js/map.js");
//
// var initMap = require("./../js/map.js").initMap;
// var toggleStreetView = require("./../js/map.js").toggleStreetView;
// var deleteMarkers = require("./../js/map.js").deleteMarkers;
$(document).ready(function() {

  $(window).load(map.initMap);
  $("#toggleView").click(map.toggleStreetView);
  $("#deleteMarkers").click(map.deleteMarkers);
});
