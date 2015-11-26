json.extract! cider, :id, :name, :description, :style, :organic,
                     :abv, :average, :review_count

json.brewery do
  json.partial! 'api/breweries/show', brewery: cider.brewery
end

json.image_url image_path(cider.image.url(:medium))
