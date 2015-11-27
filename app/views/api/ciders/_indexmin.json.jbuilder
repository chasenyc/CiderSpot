json.extract! cider, :id, :name,:description
json.brewery do
  json.partial! 'api/breweries/show', brewery: cider.brewery
end
