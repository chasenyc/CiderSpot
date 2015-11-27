json.extract! user, :id, :username, :email, :birthdate
json.image_url image_path(user.image.url(:thumb))
