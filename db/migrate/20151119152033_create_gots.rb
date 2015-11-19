class CreateGots < ActiveRecord::Migration
  def change
    create_table :gots do |t|
      t.integer :user_id, null: false
      t.integer :cider_id, null: false

      t.timestamps null: false
    end
    add_foreign_key :gots, :users, column: :user_id
    add_foreign_key :gots, :ciders, column: :cider_id
    add_index :gots, :user_id
    add_index :gots, :cider_id
  end
end
