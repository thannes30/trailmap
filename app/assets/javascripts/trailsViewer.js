var centerOfUS = new google.maps.LatLng(39.8104, -96.5560);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 4,
    scaleControl: true,
    center: centerOfUS
  };

  var image = {
    url: 'assets/images/hiker-small.png',
  };

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
      var id = id;
      marker = new google.maps.Marker({
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP,
        position: hikeCoords
      });

      var infowindow = new google.maps.InfoWindow({
        content:"<b>"+'Title: '+"</b>"+this.title+"<br/>"+"<b>"+
                'State: '+"</b>"+this.state+"<br/>"+"<b>"+'Description: '
                +"</b>"+this.description+"<br/>"+
                '<button class="favorite" data-id='+this.id+'>Favorite This Hike</button>',
      });

      google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map, this, addFavorite);
        addFavorite();
      });

  function thisHikeNotAFavoriteOfUser(){
    //get all favorites from database
    var allFaves = new FavoriteCollection();
    //iterate on all faves
    allFaves.fetch(function() {
      $.each(allFaves.favorites, function(fav) {
        //return false if hike.id == hike_from_databse.id
        if(this.id == fav.id) {
          return true;
        }
      })
    })
  }

    });
    // $("#main-map").on("click", function(){
    //   console.log("hi");
    // });
  });
}; // initialize


google.maps.event.addDomListener(window, 'load', initialize);
