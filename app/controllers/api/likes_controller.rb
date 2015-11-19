class Api::LikesController < ApplicationController

    before_action :ensure_logged_in

    def create

    end

    def destroy

    end

    private
    def ensure_logged_in
      return if logged_in?
      render json: "Forbidden, must be logged in to create review", status: :forbidden
    end

end
