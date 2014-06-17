require 'rails_helper'

RSpec.describe User, :type => :model do
  it 'has favorites' do
    new_user = User.new
    favorite_1 = Favorite.new
    favorite_2 = Favorite.new
    new_user.favorites << favorite_1
    new_user.favorites << favorite_2
    expect(new_user.favorites.count).to eq(2)
end


# RSpec.describe Order do
#   it "sums the prices of its line items" do
#     order = Order.new
#     order.add_entry(LineItem.new(:item => Item.new(
#       :price => Money.new(1.11, :USD)
#     )))
#     order.add_entry(LineItem.new(:item => Item.new(
#       :price => Money.new(2.22, :USD),
#       :quantity => 2
#     )))
#     expect(order.total).to eq(Money.new(5.55, :USD))
#   end
# end
