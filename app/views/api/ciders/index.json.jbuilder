json.array! @ciders do |cider|
  json.name cider.name
  json.description cider.description
  json.organic cider.organic
  json.abv cider.abv
  json.image_url cider.image_url
end
