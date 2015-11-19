class CreateWants < ActiveRecord::Migration
  def change
    create_table :wants do |t|
      t.integer :user_id, null: false
      t.integer :cider_id, null: false

      t.timestamps null: false
    end
    add_foreign_key :wants, :users, column: :user_id
    add_foreign_key :wants, :ciders, column: :cider_id
    add_index :wants, :user_id
    add_index :wants, :cider_id
  end
end
