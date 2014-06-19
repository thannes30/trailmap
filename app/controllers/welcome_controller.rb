class WelcomeController < ApplicationController

  def index
    @user = User.new
    trails = Trail.all
  end

end
