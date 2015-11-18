json.extract! @cider, :id, :name, :description, :brewery_id, :style, :organic, :abv, :image_url, :average

json.reviews do
  json.partial! 'api/reviews/show', collection: @cider.reviews, as: :review
end
