//Simple drop of marker
// function initialize() {
//   var myLatlng = new google.maps.LatLng(41.026955,-74.1594329);
//   var mapOptions = {
//     zoom: 8,
//     center: myLatlng
//   }

//   var map = new google.maps.Map(document.getElementById('main-map'), mapOptions);

//   var marker = new google.maps.Marker({
//     position: myLatlng,
//     map: map,
//     title: 'All Markers'
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);





//Animated bounce drop of marker

var centerOfUS = new google.maps.LatLng(39.8104, -96.5560);
var testHikeCoords = new google.maps.LatLng(41.0269, -74.1594);

// function allcoords(){
//   var flightPlanCoordinates = [
//     new google.maps.LatLng(42.07376224008719, -90.911865234375),
//     new google.maps.LatLng(42.06560675405716, -89.989013671875),
//     new google.maps.LatLng(41.91862886518304, -89.197998046875),
//     new google.maps.LatLng(41.582579601430346, -88.670654296875)
//   ];
// }

var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 4,
    center: centerOfUS
  };

  map = new google.maps.Map(document.getElementById('main-map'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: testHikeCoords
    // position: flightPlanCoordinates
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
