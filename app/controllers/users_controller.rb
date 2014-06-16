class UsersController < ApplicationController
    before_action :require_login, only: [:profile]

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    redirect_to root_path
  end

  def profile

  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
