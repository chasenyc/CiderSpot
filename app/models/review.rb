class Review < ActiveRecord::Base
  validates :user_id, :cider_id, :look_rating, :smell_rating, :taste_rating, :feel_rating, :overall_rating, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :user_id

  belongs_to :cider


end
