class Api::CidersController < ApplicationController

  def index
    @ciders = Cider.all
    render 'index'
  end

  def create

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
