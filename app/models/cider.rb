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

  def test
    Cider.find_by_sql(<<-SQL)
      SELECT
        ciders.*
      FROM
        ciders
      INNER JOIN
        (SELECT cider_id,
          (
            reviews.overall_rating +
            reviews.look_rating +
            reviews.smell_rating +
            reviews.feel_rating +
            reviews.taste_rating
          ) AS total_scores
        FROM
          reviews) as totals on ciders.id = totals.cider_id
      GROUP BY
        ciders.id
      ORDER BY
        AVG(totals.total_scores) DESC
    SQL
  end


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
