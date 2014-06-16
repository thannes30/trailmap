

function TrailModel(obj){
  this.id = obj.id;
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

function TrailCollection(){
  this.trails = {}
}

TrailCollection.prototype.fetch = function(cb){
  var that = this;
  return $.ajax({
    url: '/trails',
    method: 'get',
    dataType: 'json',
    success: function(data, status, jqxhr){
      $.each(data, function(i, datum){
        var trail = new TrailModel(datum);
        that.trails[trail.id] = trail;
      });
      if(typeof cb === 'function'){
        cb(data);
      }
    }
  })
}

function addFavorite(){
  // setTimeout(function(){
    $('.favorite').on('click', function(event){
      var id = $(event.target).data('id');
      $.ajax({
        url: '/trails/favorite',
        method: 'post',
        dataType: 'json',
        data: {id: id},
        success: function(data){
          $(event.target).remove();
        }
      })
    })
  }
;
