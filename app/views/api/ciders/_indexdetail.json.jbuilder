json.extract! cider, :id, :name, :description, :organic,
                     :abv, :average, :review_count

json.brewery do
  json.partial! 'api/breweries/show', brewery: cider.brewery
end

json.style do
  json.partial! 'api/styles/show', style: cider.style
end

json.image_url image_path(cider.image.url(:medium))
