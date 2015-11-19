class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :review_id, null: false

      t.timestamps null: false
    end
    add_foreign_key :likes, :users, column: :user_id
    add_foreign_key :likes, :reviews, column: :review_id
    add_index :likes, :user_id
    add_index :likes, :review_id
  end
end
