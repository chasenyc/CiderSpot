class Cider < ActiveRecord::Base
  include PgSearch
  paginates_per 8

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

  validates :name, :description, :brewery_id, :style_id, :organic, :abv, presence: true

  validates :name, uniqueness: true

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
    Cider.order('AVG(totals.total_scores) DESC NULLS LAST, ciders.id')
  end

  def self.bottom_rated
    Cider.order('AVG(totals.total_scores) ASC , ciders.id')
  end

  def self.most_recently_updated
    result = Cider.order(updated_at: :desc, id: :asc)
  end

  def self.least_recently_updated
    result = Cider.order(updated_at: :asc, id: :asc)
  end

  def self.with_averages
    subquery = Review.select('reviews.cider_id AS cider_id, ((reviews.overall_rating +
          reviews.look_rating + reviews.smell_rating + reviews.feel_rating +
          reviews.taste_rating) / 5) AS total_scores')

    Cider.select("ciders.*, ROUND(CAST(AVG(totals.total_scores) AS numeric), 1) AS average, COUNT(totals.total_scores) as review_count").joins("LEFT OUTER JOIN (#{subquery.to_sql}) as totals on ciders.id = totals.cider_id")
         .group('ciders.id')
  end

end
