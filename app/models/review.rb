class Review < ActiveRecord::Base
  validates :user_id, :cider_id, :look_rating, :smell_rating, :taste_rating, :feel_rating, :overall_rating, presence: true

  belongs_to :author
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :cider
    class_name: 'Cider',
    foreign_key: :cider_id,
    primary_key: :id
    
end
