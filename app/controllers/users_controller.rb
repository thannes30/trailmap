class UsersController < ApplicationController
    before_action :require_login, only: [:profile]

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    redirect_to login_path
  end

  def profile
    # @user = User.all
    # @trail = Trail.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
