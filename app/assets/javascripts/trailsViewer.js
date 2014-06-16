var centerOfUS = new google.maps.LatLng(39.8104, -96.5560);
// var testHikeCoords = new google.maps.LatLng(41.0269, -74.1594);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 4,
    scaleControl: true,
    center: centerOfUS
  };

  // function favoriteTrail(){

  // }

   var image = {
        url: 'assets/hike.png',
      }

  map = new google.maps.Map(document.getElementById('main-map'),
          mapOptions);

  var allTrails = new TrailCollection();
  allTrails.fetch(function(){
    // callback to fetch after all models are added
    $.each(allTrails.trails, function(prop, val){
      var title = title;
      var description = description;
      var state = state;
      var hikeCoords = new google.maps.LatLng(val.startMarker[0], val.startMarker[1]);
      marker = new google.maps.Marker({
        map:map,
        icon: image,
        animation: google.maps.Animation.DROP,
        position: hikeCoords
      });

      var infowindow = new google.maps.InfoWindow({
        content:"<b>"+'Title: '+"</b>"+this.title+"<br/>"+"<b>"+
                'State: '+"</b>"+this.state+"<br/>"+"<b>"+'Description: '
                +"</b>"+this.description+"<br/>"+'<button onclick="favoriteTrail()" class="favorite">Favorite This Hike</button>',
        maxWidth: 150
      });

      google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map, this);
      });

      // "<button onclick="myFunction()"> 'Click me'</button>"

      // google.maps.event.addListener(marker, 'click', function() {
      //   infowindow.close();
      // });

    })
  })
} // initialize


google.maps.event.addDomListener(window, 'load', initialize);
