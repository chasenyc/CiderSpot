class Api::ReviewsController < ApplicationController

  before_action  :ensure_current_user_is_author, only: [:update, :destroy]

  def create
    @review = Review.new(review_params)
    @review.cider_id = params[:cider_id]
    @review.user_id = current_user.id
    if @review.save
      render json: @review.to_json
    else
      render json: @review.errors.full_messages.to_json
    end
  end

  def update
    @review = Review.find(params[:id])
    @review.update(review_params)
    if @review.save
      render json: @review.to_json
    else
      render json: @review.errors.full_messages.to_json
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render json: "success".to_json
  end

  private
  def review_params
    params.require(:review).permit(:title, :content,
    :look_rating, :smell_rating, :taste_rating, :feel_rating, :overall_rating)
  end

  def ensure_current_user_is_author
    return if Review.find(params[:id]).user_id == current_user.id
    render json: "Forbidden", status: :forbidden
  end
end
