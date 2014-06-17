require 'rails_helper'

RSpec.describe UsersController, :type => :controller do

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

      it 'assigns @users' do
        actual = assigns(:users)
        expected = [@andre]
        expect(actual).to eq(expected)
      end
    end
  end
end
