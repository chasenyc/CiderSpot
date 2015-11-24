json.extract! user, :id, :username, :image_url, :email, :birthdate, :likes,
                    :wants, :gots, :reviews
json.image_url image_path(user.image.url)
