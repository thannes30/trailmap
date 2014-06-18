require 'rails_helper'

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
