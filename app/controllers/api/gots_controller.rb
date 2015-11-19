class Api::GotsController < ApplicationController

  before_action :ensure_logged_in

  def create
    @got = Got.new(cider_id: params[:cider_id])
    @got.user_id = current_user.id
    if @got.save
      render json: @got.to_json
    else
      render json: @got.errors.full_messages.to_json, status: :forbidden
    end
  end

  def destroy

  end

  private
  def ensure_logged_in
    return if logged_in?
    render json: "Forbidden, must be logged in to create review", status: :forbidden
  end

end
