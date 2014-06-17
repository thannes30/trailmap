var noteCollection = new NoteCollection;

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

$('#create-note-form').on('submit', function(e){
    e.preventDefault();
    var message = $('.add-note').val();
    var trail_id = $('.trail-info').attr('data-trail-id');
    var note = {message: message,
                trail_id: trail_id}
    $.ajax({
      url: '/notes',
      method: 'post',
      dataType: 'json',
      data: {note: note},
      success: function(data){
        getNotes()
        // var note = new NoteModel(data);
        // this.note[note.id] = note;
      }
    })
  }
)


function getNotes(){
  $('.notes').html('')
  var trailId = $('.trail-info').attr('data-trail-id')
  $.ajax({
    url: '/notes',
    method: 'get',
    dataType: 'json',
    data: {trailId: trailId},
    success: function(data){
      bod = data
      $(data).each(function(i, val){
        var newNote = $('<li>').text(val.message)
        $('.notes').append(newNote)
      })
    }
  })
}

// NoteCollection.prototype.post(trailId){
//   return $.ajax({
//     url: '/notes',
//     method: 'get',
//     dataType: 'json',
//     data: {trailId: trailId},
//     success: function(data){
//       $('.notes').append('<li>''</li>')
//     }
//   })
// }

