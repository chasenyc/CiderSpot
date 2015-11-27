json.extract! review, :id, :cider_id, :content, :look_rating,
                      :smell_rating, :taste_rating, :feel_rating,
                      :overall_rating, :updated_at, :likes
json.author do
  json.partial! 'api/users/usermin', user: review.author
end
