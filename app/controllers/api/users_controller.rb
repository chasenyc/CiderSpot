class Api::UsersController < ApplicationController

  before_action :ensure_current_user_is_authorized, only: [:update]

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

  def update
    byebug
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :birthdate, :image)
  end

  def ensure_current_user_is_authorized
    return if (params[:id].to_i == current_user.id)
    render json: "Something went wrong, cannot edit another user's information.", status: :forbidden
  end
end
