require 'rails_helper'

RSpec.describe UsersController, :type => :controller do

  describe 'given a user, a trail, and a favorite' do


    describe 'GET profile' do
    before :each do

      @andre = User.new()
      @andre.username = 'Andre'
      @andre.password = 'test'
      @andre.save
      login_user(@andre)

      @trail = Trail.create(title: 'Fun hike', state: 'NY', description: 'Great view around the back ridge of Mt. St. Helena', coords: [[1,2], [3,4]] )
      @andre.trails << @trail
      @favorite = Favorite.create()
      @andre.favorites << @favorite
      get :profile
    end

      it 'responds successfully' do
        expect(response.code).to eq('200')
      end

      it 'assigns @trails to the current users trails (ie. the ones they have created)' do
        expect(assigns(:trails)).to eq(@andre.trails)
      end

      it 'assigns @favorites' do
        expect(assigns(:favorites)).to eq(@andre.favorites)
      end
    end
  end
end
