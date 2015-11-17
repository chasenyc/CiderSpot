class Cider < ActiveRecord::Base
  validates :name, :description, :brewery_id, :style, :organic, :abv,
            presence: true

  has_many :reviews
    class_name: 'Review',
    foreign_key: :cider_id,
    primary_key: :id
    
end
