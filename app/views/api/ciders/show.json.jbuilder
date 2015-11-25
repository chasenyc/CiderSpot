json.extract! @cider, :id, :name, :description, :style, :organic, :abv, :image_url, :average, :brewery, :review_count, :gots

json.reviews do
  json.partial! 'api/reviews/show', collection: @cider.reviews, as: :review
end
