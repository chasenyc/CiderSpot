class Api::BreweriesController < ApplicationController

  def index
    @breweries = Brewery.all
  end
end
