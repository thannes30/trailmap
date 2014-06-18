
function TrailModel(obj){
  this.id = obj.id;
  this.title = obj.title;
  this.description = obj.description;
  this.state = obj.state;
  this.startMarker = obj.coords[0];
  this.coords = obj.coords;
}

function TrailView(model){
  this.model = model;
  this.el = undefined;
}

function TrailCollection(){
  this.trails = {};
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
        },
        error: function(){
          $("main").css("opacity", ".2");
          $("nav").css("padding", "2%");
          $(".title").after("<p class='error'>*You must login/signup first</p>");
          $(".error").css("color", "#000").css("text-align", "center").css("margin", "0 auto");
          // $(".login, .signup").css("color", "red").css("font-size", "200%");
          $("main").on("click", function(){
            $("main").css("opacity", "1");
            $("nav").css("padding", "0");
            $(".error").remove();
          })
        }
      })
    })
  }
