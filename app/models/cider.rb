class Cider < ActiveRecord::Base
  validates :name, :description, :brewery_id, :style, :organic, :abv,
            presence: true

  has_many :reviews, dependent: :destroy

  belongs_to :brewery

  def average
    return 0 if reviews.count == 0
    sum = 0
    reviews.each { |review| sum += review.average }
    (sum / reviews.count).round(1)
  end

end
