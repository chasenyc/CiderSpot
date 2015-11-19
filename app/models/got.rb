class Got < ActiveRecord::Base
  validates :user_id, :cider_id, presence: true

  belongs_to :user
  belongs_to :cider

end
