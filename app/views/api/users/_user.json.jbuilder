json.extract! user, :id, :username, :email, :birthdate, :likes

json.wanted user.wants
json.gotten user.gots

json.wants do
  json.partial! 'api/ciders/indexdetail', collection: user.wanted_ciders, as: :cider
end

json.gots do
  json.partial! 'api/ciders/indexdetail', collection: user.gotten_ciders, as: :cider
end

json.reviewed do
  json.partial! 'api/ciders/indexdetail', collection: user.reviewed_ciders, as: :cider
end

json.image_url image_path(user.image.url(:thumb))
