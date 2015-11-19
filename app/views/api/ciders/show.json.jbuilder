json.extract! @cider, :id, :name, :description, :style, :organic, :abv, :image_url, :average, :brewery, :average_look, :average_feel, :average_smell, :average_taste, :average_overall, :review_count, :gots

json.reviews do
  json.partial! 'api/reviews/show', collection: @cider.reviews, as: :review
end
