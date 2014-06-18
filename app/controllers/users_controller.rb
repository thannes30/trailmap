class UsersController < ApplicationController
    before_action :require_login, only: [:profile]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
       render :json => @user.to_json
    else
      @user = @user.errors.full_messages
      render :json => @user.to_json
    end
  end

  def profile
    @trails = current_user.trails
    @favorites = current_user.favorites
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
