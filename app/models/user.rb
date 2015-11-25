class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, :birthdate,
            presence: true
  validates :email, :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :admin, inclusion: { in: [true, false]}
  has_attached_file :image,
                    :styles => {
                      :thumb => "100x100",
                      :medium => "300x300"
                    },
                    default_url: "avatar.jpg"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :reviews, dependent: :destroy
  has_many :wants, dependent: :destroy

  has_many :wanted_ciders,
    through: :wants,
    source: :cider

  has_many :gotten_ciders,
    through: :gots,
    source: :cider

  has_many :reviewed_ciders,
    through: :reviews,
    source: :cider

  has_many :gots, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :posts, dependent: :destroy


  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password
    @password
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def image_url
    image.url
  end

end
