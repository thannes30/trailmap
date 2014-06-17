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

RSpec.describe WelcomeController, :type => :controller do

  describe 'given a user' do
    before :each do
      @andre = User.new()
      @andre.username = 'Andre'
      @andre.save
    end

    describe 'GET index' do
      before :each do
        get :index
      end

      it 'responds successfully' do
        expect(response.code).to eq('200')
      end
    end
  end
end

RSpec.describe TrailsController, :type => :controller do
  describe 'given trails' do
    before :each do
      trail = Trail.create()
      trail1 = Trail.create()
    end

    describe 'GET index' do
      before :each do
        get :index
      end

      it 'responds successfully' do
        expect(response.code).to eq('200')
      end
      it 'assigns @trails' do
        assigns(:trails).should_not be_nil
      end
    end

  end
end

# RSpec.describe UsersController, :type => :controller do
#     describe 'GET profile' do
#       before :each do
#         Session.new()
#         get :profile
#       end

#       it 'responds successfully' do
#         expect(response.code).to eq('200')
#       end
#     end
# end

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
