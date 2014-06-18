require 'rails_helper'

RSpec.describe TrailsController, :type => :controller do
  describe 'given trails and a current user' do
    before :each do
      @andre = User.new()
      @andre.username = 'Andre'
      @andre.password = 'test'
      @andre.save
      login_user(@andre)
      @trail = Trail.create("id" => 1, "title"=>"1",
   "description"=>"3",
   "state"=>"2",
   "coords"=>
    [1,2])
      @trail1 = Trail.create()
      @params = {'id' => @trail.id}
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

    describe 'POST favorite' do
      before :each do
        post :favorite, @params
      end

      it 'responds successfully' do
        expect(response.code).to eq('200')
      end

      it 'creates a favorite' do
        expect(Favorite.all.length).to eq(1)
      end
    end
  end

  describe 'given parameters to create a trail, and a current user' do
    before :each do
      @params = {"trail"=>
  {"title"=>"1",
   "description"=>"3",
   "state"=>"2",
   "coords"=>
    {"0"=>["43.82714122146659", "-111.74593716859818"],
     "1"=>["45.576124018164634", "-101.37484341859818"],
     "2"=>["40.439155424641115", "-101.28695279359818"],
     "3"=>["38.883063726431054", "-109.72445279359818"]}},
 "controller"=>"trails",
 "action"=>"create"}
      @andre = User.new()
      @andre.username = 'Andre'
      @andre.password = 'test'
      @andre.save
      login_user(@andre)
    end
    describe 'POST create' do
      before :each do
        post :create, @params
      end

      it 'responds successfully' do
        expect(response.code).to eq('200')
      end
    end
  end
end
