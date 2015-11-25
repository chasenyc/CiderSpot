class Post < ActiveRecord::Base

  validates :user_id, :title, :body, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :user_id
end
