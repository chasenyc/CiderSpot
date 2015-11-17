class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :cider_id, null: false
      t.string :title
      t.text :content
      t.float :look_rating, null: false
      t.float :smell_rating, null: false
      t.float :taste_rating, null: false
      t.float :feel_rating, null: false

      t.timestamps null: false
    end
    add_index :reviews, :user_id
    add_index :reviews, :cider_id
    add_foreign_key :reviews, :users, column: :user_id
    add_foreign_key :reviews, :ciderss, column: :cider_id
  end
end
