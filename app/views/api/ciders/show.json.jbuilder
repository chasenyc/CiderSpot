
json.extract! @cider, :id, :name, :description, :style, :organic, :abv, :brewery, :gots

if (@cider.attribute_present?(:average))
  json.extract! @cider, :average, :review_count
else
  json.average 'none'
  json.review_count 0
end

json.reviews do
  json.partial! 'api/reviews/show', collection: @cider.reviews, as: :review
end

json.image_url image_path(@cider.image.url)
