class AddOverallRatingToReviewModel < ActiveRecord::Migration
  def change
    add_column :reviews, :overall_rating, :float, null: false, default: 3
  end
end
