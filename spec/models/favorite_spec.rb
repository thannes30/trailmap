require 'rails_helper'

RSpec.describe Favorite, :type => :model do
  it 'belongs to a user and a trail' do
    new_user = User.new
    favorite = Favorite.new
    trail = Trail.new
    new_user.favorites << favorite
    trail.favorites << favorite
    expect(new_user.favorites[0]).to eq(favorite)
    expect(trail.favorites[0]).to eq(favorite)
    expect(favorite.user).to eq(new_user)
    expect(favorite.trail).to eq(trail)
  end
end
