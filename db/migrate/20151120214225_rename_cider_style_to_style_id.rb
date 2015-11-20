class RenameCiderStyleToStyleId < ActiveRecord::Migration
  def change
    rename_column :ciders, :style, :style_id
  end
end
