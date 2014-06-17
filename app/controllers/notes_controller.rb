class NotesController < ApplicationController

  def create
    note = Note.create(notes_params)

    current_user.notes << note
    render :json => note.to_json
  end

  private

  def notes_params
    params.require(:note).permit(:message, :message_id, :user_id, :trail_id, :created_at)
  end

end
