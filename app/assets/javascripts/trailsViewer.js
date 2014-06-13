// var trailsMap = new google.maps.Map(document.getElementById('all-trails-map'),
//       mapOptions);


// function allcoords(){
//   var flightPlanCoordinates = [
//     new google.maps.LatLng(42.07376224008719, -90.911865234375),
//     new google.maps.LatLng(42.06560675405716, -89.989013671875),
//     new google.maps.LatLng(41.91862886518304, -89.197998046875),
//     new google.maps.LatLng(41.582579601430346, -88.670654296875)
//   ];
// }





function initialize() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }

  var map = new google.maps.Map(document.getElementById('main-map'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'All Markers'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);








// THIS WEEKEND TIM, SET TIMEOUT DROP
// var berlin = new google.maps.LatLng(52.520816, 13.410186);

// var neighborhoods = [
//   new google.maps.LatLng(52.511467, 13.447179),
//   new google.maps.LatLng(52.549061, 13.422975),
//   new google.maps.LatLng(52.497622, 13.396110),
//   new google.maps.LatLng(52.517683, 13.394393)
// ];

// var markers = [];
// var iterator = 0;

// var map;

// function initialize() {
//   var mapOptions = {
//     zoom: 12,
//     center: berlin
//   };

//   map = new google.maps.Map(document.getElementById('main-map'),
//           mapOptions);

// }

// function drop() {
//   for (var i = 0; i < neighborhoods.length; i++) {
//     setTimeout(function() {
//       addMarker();
//     }, i * 200);
//   }
// }


// function addMarker() {
//   markers.push(new google.maps.Marker({
//     position: neighborhoods[iterator],
//     map: map,
//     draggable: false,
//     animation: google.maps.Animation.DROP
//   }));
//   iterator++;
// }

// google.maps.event.addDomListener(window, 'load', initialize);

