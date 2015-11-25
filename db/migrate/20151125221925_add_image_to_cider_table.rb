class AddImageToCiderTable < ActiveRecord::Migration
  def change
    add_attachment :ciders, :image
  end
end
