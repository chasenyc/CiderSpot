json.extract! user, :id, :username, :email, :birthdate, :likes
json.image_url image_path(user.image.url(:thumb))
