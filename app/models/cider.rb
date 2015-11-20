class Cider < ActiveRecord::Base
  validates :name, :description, :brewery_id, :style_id, :organic, :abv,
            presence: true

  has_many :reviews, dependent: :destroy
  has_many :wants, dependent: :destroy
  has_many :gots, dependent: :destroy

  belongs_to :brewery
  belongs_to :style

  def average
    return 0 if reviews.count == 0
    sum = 0
    reviews.each { |review| sum += review.average }
    (sum / reviews.count).round(1)
  end

  def average_look
    reviews.average(:look_rating).to_f
  end

  def average_smell
    reviews.average(:smell_rating).to_f
  end

  def average_taste
    reviews.average(:taste_rating).to_f
  end

  def average_feel
    reviews.average(:feel_rating).to_f
  end

  def average_overall
    reviews.average(:overall_rating).to_f
  end

  def review_count
    reviews.count
  end

end
