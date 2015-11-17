class Cider < ActiveRecord::Base
  validates :name, :description, :brewery_id, :style, :organic, :abv,
            presence: true

  has_many :reviews, dependent: :destroy

  def average
    sum = 0
    reviews.each { |review| sum += review.average }
    sum / reviews.count
  end

end
