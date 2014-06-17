
function NoteModel(obj){
  this.message = obj.message;
}

function NoteView(model){
  this.model = model;
  this.el = undefined;
}

function NoteCollection(){
  this.notes = {};
}

function NoteCollection.prototype.add = function(note){
  var that = this;
  $.ajax({
    url: '/notes',
    method: 'post',
    dataType: 'json',
    data: {note: note},
    success: function(data){
      var note = new NoteModel(data);
      that.note[note.id] = note;
    }
  })
}
