class Api::CidersController < ApplicationController

  def index
    page_num = params[:page]
    base = Cider.with_averages.includes(:brewery, :style).page(page_num)
    case params[:filter]
      when 'top'
        @ciders = base.top_rated
      when 'bottom'
        @ciders = base.bottom_rated
      when 'newest'
        @ciders = base.most_recently_updated
      when 'oldest'
        @ciders = base.least_recently_updated
      else
        @ciders = base.top_rated
    end
    render 'index'
  end

  def create
    @cider = Cider.new(cider_params)
    if @cider.save
      render 'show'
    else
      render json: @cider.errors.full_messages
    end
  end

  def update
    @cider = Cider.find(params[:id])
    @cider.update(cider_params)
    if @cider.save
      render 'show'
    else
      render json: @cider.errors.full_messages.to_json
    end
  end

  def show
    @cider = Cider.with_averages.includes(:brewery, :style, reviews: [:likes, :author]).find(params[:id])
    render 'show'
  end

  private
  def cider_params
    params.require(:cider).permit(:name, :description, :brewery_id, :style_id, :organic, :abv, :image)
  end
end
