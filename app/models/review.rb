class Review < ActiveRecord::Base
  validates :user_id, :cider_id, :look_rating, :smell_rating, :taste_rating, :feel_rating, :overall_rating, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :user_id

  belongs_to :cider
  has_many :likes, dependent: :destroy

  def average
    (look_rating + smell_rating + taste_rating + feel_rating + overall_rating) / 5
  end

end
