class Api::LikesController < ApplicationController

    before_action :ensure_logged_in

    def create
      @like = Like.new(review_id: params[:review_id])
      @like.user_id = current_user.id
      if @like.save
        render json: @like.to_json
      else
        render json: @like.errors.full_messages.to_json, status: :forbidden
      end
    end

    def destroy
      @like = Like.find(params[:id])
      if @like.destroy
        render json: @like.to_json
      else
        render json: "Looks like we encountered a small problem, err-feature!", status: 402
      end
    end

    private
    def ensure_logged_in
      return if logged_in?
      render json: "Forbidden, must be logged in to create review", status: :forbidden
    end

end
