class Api::SearchController < ApplicationController

  def index
    @search_results = Cider
      .search_all(params[:query])
      .page(1).per(8)
  end

end
