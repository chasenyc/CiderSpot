class Cider < ActiveRecord::Base
  validates :name, :description, :brewery_id, :style, :organic, :abv,
            presence: true

  has_many :reviews, dependent: :destroy

end
