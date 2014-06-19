
var newTrailCoords = [];
function trailCoords(lat, long) {
  var coord = [lat, long];
  newTrailCoords.push(coord);
}

var centerOfUS = new google.maps.LatLng(39.8104, -96.5560);

var poly;
var map;

function initialize() {
  $('#create-trail-form-div').hide()
  var mapOptions = {
    zoom: 4,
    // Center the map on Chicago, USA.
    center: centerOfUS,
    scaleControl: true
  };

  map = new google.maps.Map(document.getElementById('map-trail'), mapOptions);

  /////// Uncomment this section to restore line drawing to the map//////////////
  ////// This bit of code seems to style the line that will be drawn
  // var polyOptions = {
  //   strokeColor: '#000000',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 3,
  // };
  ////////This bit of code seems to turn on the line drawing
  // poly = new google.maps.Polyline(polyOptions);
  // trails.push(poly)
  // poly.setMap(map);
  // google.maps.event.addListener(map, 'click', addLatLng);

  setEventHandlers()

} // initialize

/**
 * Handles click events on a map, and adds a new point to the Polyline.
 * @param {google.maps.MouseEvent} event
 */
  var polyOptions = {
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3,
  };


function setTrailDrawing(){
  poly = new google.maps.Polyline(polyOptions);
  trails.push(poly)
  poly.setMap(map);
  google.maps.event.addListener(map, 'click', addLatLng);
}

function removeTrailDrawing(){
  google.maps.event.clearListeners(map, 'click');
}


function addLatLng(event) {

  var path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);
  trailCoords(event.latLng['k'], event.latLng['A']);
  // Add a new marker at the new plotted point on the polyline.
  var marker = new google.maps.Marker({
    position: event.latLng,
    title: '#' + path.getLength(),
    map: map



  });
  markers.push(marker)
  drawTrail()
}

google.maps.event.addDomListener(window, 'load', initialize);

function makeTrail(){
  var object = {}
  object['title'] = $('.create-trail-title').val();
  object['description'] = $('.create-trail-description').val();
  object['state'] = $('.create-trail-state').val();
  object['coords'] = newTrailCoords;
  return object;
}

function setEventHandlers(){
    liClick()
    createTrailClick()
    trailFormClick()
    clearButtonClick()
}

var markers = []
var trails = []

function removeFromMap(things){
  $(things).each(function(i, val){
    val.setMap(null);
  })
}

function clearMap(){
    removeFromMap(markers)
    removeFromMap(trails)
}


//hide add notes h2 and input form
 $('.add-notes-here').hide();
 $('.add-notes-form').hide();

function liClick(){
    $(".trail").on("click", function(event) {
    $('.trailinfo-ul').html('');
    $('.add-notes-here').show();
    $('.add-notes-form').show();
    $('#create-trail-form-div').hide()

    $("#map-trail").css("opacity", "1");
    $(".trail").css("border", "1px solid rgba(0,0,0,0)").css("border-radius", ".2em").css("background-color", "#eee");
    $(this).css("border", "1px solid #0e700e").css("border-radius", ".2em").css("background-color", "#fff");

    var myTrail = $(this).data('coords');
    var trailTitle = $(this).data('title');
    var trailState = $(this).data('state');
    var trailDescription = $(this).data('description');
    var trailId = $(this).data('trail-id');

    $('.trailinfo-ul').append("<li><b>Title: </b>"+trailTitle+"</li>")
    $('.trailinfo-ul').append("<li><b>State: </b>"+trailState+"</li>")
    $('.trailinfo-ul').append("<li><b>Description: </b>"+trailDescription+"</li>")
    $('.trailinfo-ul').attr('data-trail-id', trailId)

    clearMap()
    getNotes()

    var markerArray = [myTrail[0], myTrail[myTrail.length-1]];
    $(markerArray).each(function(array) {
      var eachMarker = new google.maps.LatLng(markerArray[array][0], markerArray[array][1]);
      var trailMarker = new google.maps.Marker({
        position: eachMarker,
        map: map
      })
      markers.push(trailMarker)
    })

    var allCoords = [];
    $(myTrail).each(function(array) {
      var findTrail = myTrail[array];
      var trailPosition = new google.maps.LatLng(findTrail[0], findTrail[1]);
      // console.log(trailPosition);
      allCoords.push(trailPosition);
    })

    var append = new google.maps.Polyline({
      path: allCoords,
      strokeColor: '#f00',
      strokeOpacity: .7,
      strokeWeight: 5
    })
    append.setMap(map);
    trails.push(append)
    })
}

function createTrailClick(){
  $('.create-trail-button').on('click', function(e) {
    e.preventDefault();
    var newTrail = makeTrail();
    var currentUserId = $('.current-user-id').val();
    // console.log(newTrail);
    $.ajax({
      url: '/trails',
      method: 'post',
      dataType: 'json',
      data: {trail: newTrail},
      success: function(data) {
        var listTrail = new TrailModel(data)
        if (listTrail.id != null) {
          var newLi = $('<li>')
          newLi.attr('class', 'trail').attr('data-trail-id', listTrail.id).attr('data-state', listTrail.state).attr('data-title', listTrail.title).data('coords', listTrail.coords).attr('data-description', listTrail.description).text(listTrail.title)
          $('.trails-ul').append(newLi)
          newTrailCoords = []
          liClick()
          clearMap()
          clearFields()
          $('#create-trail-form-div').hide()
          removeTrailDrawing()
          alert('You have successfully created a trail! check out your list to review/make notes!')
        } else {
        alert('YouYour trail was not created! Fill out all fields and draw a trail to make one!')
        }
      }
    });
  });
}

// function clearFields(){
//   $('.create-trail-title').html('')
//   $('.create-trail-state').html('')
//   $('.create-trail-description').html('')
// }
function clearFields(){
  $('.create-trail-title').val('')
  $('.create-trail-state').val('')
  $('.create-trail-description').val('')
}

function trailFormClick(){
  $('.create-trail-form-button').on('click', function(){
      setTrailDrawing()
      newTrailCoords = []
     // $('.add-notes-here').hide();
     $('.add-notes-form').hide();
     clearMap()
    $('#create-trail-form-div').show()
  })
}

function clearButtonClick(){
  $('.clear-fields-button').on('click', function(){
    newTrailCoords = []
    clearMap()
    clearFields()
  })
}

function drawTrail(){
  var allLatLong = []
    $(newTrailCoords).each(function(index, value) {
      var trailPosition = new google.maps.LatLng(value[0], value[1]);
      // console.log(trailPosition);
      allLatLong.push(trailPosition);
    })
    var append = new google.maps.Polyline({
      path: allLatLong,
      strokeColor: '#f00',
      strokeOpacity: .7,
      strokeWeight: 5
  })
  trails.push(append)
  removeFromMap(trails)
  append.setMap(map);
}
