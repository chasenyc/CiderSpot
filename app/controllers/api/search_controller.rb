class Api::SearchController < ApplicationController

  def index
    @search_results = PgSearch
      .search_all(params[:query])
      .page(1).per(4)
  end

end
