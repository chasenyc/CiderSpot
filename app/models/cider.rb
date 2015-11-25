class Cider < ActiveRecord::Base
  validates :name, :description, :brewery_id, :style_id, :organic, :abv,
            presence: true

  has_many :reviews, dependent: :destroy
  has_many :wants, dependent: :destroy
  has_many :gots, dependent: :destroy

  belongs_to :brewery
  belongs_to :style

  def self.top_rated

    subquery = Review.select(:cider_id, '(reviews.overall_rating +
          reviews.look_rating +
          reviews.smell_rating +
          reviews.feel_rating +
          reviews.taste_rating
        ) AS total_scores')

    Cider.from("ciders INNER JOIN (#{subquery.to_sql})
                      as totals on ciders.id = totals.cider_id")
               .group('ciders.id')
               .order('AVG(totals.total_scores) DESC')



  end

  def average
    averages = reviews.group('id').select('((reviews.overall_rating +
          reviews.look_rating +
          reviews.smell_rating +
          reviews.feel_rating +
          reviews.taste_rating
        ) / 5) AS total_scores')

    sum = 0
    averages.each { |avg| sum += avg.total_scores }
    real_average = sum / averages.size
    real_average.round(1)
  end

  def review_count
    reviews.count
  end

end
