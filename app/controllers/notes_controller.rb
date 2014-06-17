class NotesController < ApplicationController

  def index
    @notes = Note.where("trail_id=" + params[:trailId].to_s)
    render :json => @notes.to_json
  end

  def create
    note = Note.new(notes_params)
    current_user.notes << note
    note.save
    render :json => note.to_json
  end

  private

  def notes_params
    params.require(:note).permit(:message, :trail_id, :user_id)
  end

end
