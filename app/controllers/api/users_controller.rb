class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.admin = false
    if @user.save
      session[:session_token] = @user.session_token
      render "show"
    else
      render json: @user.errors.full_messages.to_json, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :birthdate)
  end
end
