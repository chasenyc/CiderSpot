class Cider < ActiveRecord::Base
  include PgSearch

  pg_search_scope :search_all,
                  :against => {
                    :name => 'A'

                  }, :associated_against => {
                    :brewery => :name
                  },
                  :using => {
                    :tsearch => {:prefix => true},
                    :trigram => {:threshold => 0.1}
                  }

  validates :name, :description, :brewery_id, :style_id, :organic, :abv,
            presence: true

  has_attached_file :image,
                    :styles => {:medium => "300x300" },
                    default_url: "cider_avatar.jpg"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :reviews, dependent: :destroy
  has_many :wants, dependent: :destroy
  has_many :gots, dependent: :destroy

  belongs_to :brewery
  belongs_to :style

  def self.top_rated
    subquery = Review.select(:cider_id, '(reviews.overall_rating +
          reviews.look_rating + reviews.smell_rating + reviews.feel_rating + reviews.taste_rating) AS total_scores')

    Cider.from("ciders INNER JOIN (#{subquery.to_sql})
              as totals on ciders.id = totals.cider_id")
         .group('ciders.id')
         .order('AVG(totals.total_scores) DESC')
  end

  def self.bottom_rated
    subquery = Review.select(:cider_id, '(reviews.overall_rating +
          reviews.look_rating + reviews.smell_rating + reviews.feel_rating +
          reviews.taste_rating) AS total_scores')

    Cider.from("ciders INNER JOIN (#{subquery.to_sql}) as totals on ciders.id = totals.cider_id")
         .group('ciders.id')
         .order('AVG(totals.total_scores) ASC')
  end

  def self.most_recently_updated
    result = Cider.order(updated_at: :desc)
  end

  def self.least_recently_updated
    result = Cider.order(updated_at: :asc)
  end

  def self.with_averages
    subquery = Review.select('reviews.cider_id AS cider_id, ((reviews.overall_rating +
          reviews.look_rating + reviews.smell_rating + reviews.feel_rating +
          reviews.taste_rating) / 5) AS total_scores')

    Cider.select("ciders.*, AVG(totals.total_scores) AS average").joins("INNER JOIN (#{subquery.to_sql}) as totals on ciders.id = totals.cider_id")
         .group('ciders.id')
  end

  def review_count
    reviews.count
  end

end
