class Like < ActiveRecord::Base
  validates :user_id, :review_id, presence: true
  validates_uniqueness_of :user_id, scope: :review_id

  belongs_to :user
  belongs_to :review
  
end
