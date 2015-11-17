class Review < ActiveRecord::Base
  validates :user_id, :cider_id, :look_rating, :smell_rating, :taste_rating, :feel_rating
end
