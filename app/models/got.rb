class Got < ActiveRecord::Base
  validates :user_id, :cider_id, presence: true
  validates_uniqueness_of :user_id, scope: :cider_id

  belongs_to :user
  belongs_to :cider

end
