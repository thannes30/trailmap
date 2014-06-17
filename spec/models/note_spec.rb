require 'rails_helper'

RSpec.describe Note, :type => :model do
  it 'belongs to a user and a trail' do
    new_note = Note.new
    trail_1 = Trail.new
    trail_2 = Trail.new
    user_1 = User.new
    user_2 = User.new
    user_1.notes << new_note
    user_2.notes << new_note
    trail_1.notes << new_note
    trail_2.notes << new_note
    expect(new_note.user).to be_instance_of(User)
    expect(new_note.trail).to be_instance_of(Trail)
  end
end
