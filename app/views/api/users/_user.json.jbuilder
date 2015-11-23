json.extract! user, :id, :username, :image_url, :email, :birthdate
json.image_url image_path(user.image.url)
