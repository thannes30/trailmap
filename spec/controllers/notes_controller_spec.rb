require 'rails_helper'

RSpec.describe NotesController, :type => :controller do

    describe 'GET index' do
      before :each do
        @note = Note.create(trail_id: '1')
        @trail = Trail.create(id: '1')
        @params = {trailId: '1'}
        get :index, @params
      end

      it 'responds successfully' do
        expect(response.code).to eq('200')
      end

      it 'assigns @user' do
        expect(assigns[:notes].count).to eq(1)
      end
    end
end
