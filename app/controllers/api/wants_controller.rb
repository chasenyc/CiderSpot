class Api::WantsController < ApplicationController

    before_action :ensure_logged_in

    def create
      @want = Want.new(cider_id: params[:cider_id])
      @want.user_id = current_user.id
      if @want.save
        render json: @want.to_json
      else
        render json: @want.errors.full_messages.to_json, status: :forbidden
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
