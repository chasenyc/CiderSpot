class Api::CidersController < ApplicationController

  def index
    page_num = params[:page]
    case params[:style]
      when 'top'
        @ciders = Cider.top_rated.page(page_num).per(8)
      when 'bottom'
        @ciders = Cider.bottom_rated.page(page_num).per(8)
      when 'newest'
        @ciders = Cider.most_recently_updated.page(page_num).per(8)
      when 'oldest'
        @ciders = Cider.least_recently_updated.page(page_num).per(8)
      else
        @ciders = Cider.top_rated.page(page_num).per(8)
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
      render json: @cider.errors.full_messages
    end
  end

  def show
    @cider = Cider.find(params[:id])
    render 'show'
  end

  private
  def cider_params
    params.require(:cider).permit(:name, :description, :brewery_id, :style, :organic, :abv)
  end
end
