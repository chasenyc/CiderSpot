json.extract! @cider, :id, :name, :description, :style, :organic, :abv, :average, :brewery, :review_count, :gots

json.reviews do
  json.partial! 'api/reviews/show', collection: @cider.reviews, as: :review
end

json.image_url image_path(@cider.image.url)
