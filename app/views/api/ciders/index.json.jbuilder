# json.extract! @ciders, :id, :name, :description, :brewery_id

json.array! @ciders do |cider|
  json.name cider.name
  json.description cider.description
  json.organic cider.organic
  json.abv cider.abv
end
