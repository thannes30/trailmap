function FavoriteModel(obj) {
  this.user_id = obj.user_id;
  this.trail_id = obj.trail_id;
}

function FavoriteView(model) {
  this.model = model;
  this.el = undefined;
}

function FavoriteCollection() {
  this.favorites = {};
}

FavoriteCollection.prototype.fetch = function() {
  var that = this;
  $.ajax({
    url: "/trails",
    method: "get",
    dataType: "json",
    success: function(data) {
      $.each(data, function(datum) {
        $.each(data[datum].favorites, function(favDatum) {
          console.log(data[datum].favorites[favDatum]);
          return data[datum].favorites[favDatum];
        })
      })
    }
  })
}