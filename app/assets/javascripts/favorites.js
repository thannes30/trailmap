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

FavoriteCollection.prototype.fetch = function(callback) {
  var that = this;
  $.ajax({
    url: "/trails",
    method: "get",
    dataType: "json",
    success: function(data) {
      $.each(data, function(i, datum) {
        var fav = new FavoriteModel(datum);
        that.favorites[fav.id] = fav;
      })
    }
  })
}