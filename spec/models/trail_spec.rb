require 'rails_helper'

RSpec.describe Trail, :type => :model do
  it 'has favorites' do
    new_trail = Trail.new
    favorite_1 = Favorite.new
    favorite_2 = Favorite.new
    new_trail.favorites << favorite_1
    new_trail.favorites << favorite_2
    expect(new_trail.favorites.length).to eq(2)
  end
end
