json.extract! cider, :id, :name, :description, :brewery, :style, :organic,
                     :abv, :average, :review_count

json.image_url image_path(cider.image.url(:medium))
