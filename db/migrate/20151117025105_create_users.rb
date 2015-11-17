class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :birthdate, null: false
      t.boolean :admin, null: false, default: false
      t.string :avatar_url

      t.timestamps null: false
    end
    add_index :users, :session_token
    add_index :users, :username
    add_index :users, :email
  end
end
