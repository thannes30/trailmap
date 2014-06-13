

function TrailModel(obj){
  this.title = obj.title;
  this.description = obj.description;
  this.state = obj.state;
  this.creator = obj.creator;
  this.startMarker = obj.coords[0];

}

function TrailView(model){
  this.model = model;
  this.el = undefined;
}

TrailView.

function TrailCollection(){
  this.trails = {}
}

TrailCollection.prototype.fetch = function(){
  var that = this;
  $.ajax({
    url: '/',
    method: 'get',
    dataType: 'json',
    success: function(data){
      $.each(data, function(i, datum){
        var trail = new TrailModel(datum);
        that.trails[trail.id] = trail;
      });
    }
  })
}
