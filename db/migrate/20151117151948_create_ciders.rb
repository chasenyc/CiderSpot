class CreateCiders < ActiveRecord::Migration
  def change
    create_table :ciders do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :brewery_id, null: false
      t.integer :style, null: false
      t.string :organic, null: false
      t.float :abv, null: false
      t.string :image_url

      t.timestamps null: false
    end
    add_index :ciders, :brewery_id
  end
end
