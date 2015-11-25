class AddForeignKeyToPostsTable < ActiveRecord::Migration
  def change
    add_foreign_key :posts, :users, column: :user_id
  end
end
