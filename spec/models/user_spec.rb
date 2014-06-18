require 'rails_helper'

RSpec.describe User, :type => :model do
  it 'has favorites' do
    new_user = User.new
    favorite_1 = Favorite.new
    favorite_2 = Favorite.new
    new_user.favorites << favorite_1
    new_user.favorites << favorite_2
    expect(new_user.favorites.length).to eq(2)
  end
end

