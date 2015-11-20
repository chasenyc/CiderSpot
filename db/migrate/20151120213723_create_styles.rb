class CreateStyles < ActiveRecord::Migration
  def change
    create_table :styles do |t|
      t.string :name, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
  end
end
