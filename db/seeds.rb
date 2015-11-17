# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(username: "admin", password: "password", email: "admin@admin.com", birthdate: "1984-01-01")

cider_names = %w(apple banana orange maple fruit coal filthy sriracha)
cider_names.each do |name|
  Cider.create!(name: "#{name} cider", description: "wonderful #{name}, its a great cider.", brewery_id: Random.rand(11), style: Random.rand(11), abv: Random.rand(100), organic: 'Y')
end

titles = %w(wonderful terrible lovely dirty filthy smelly neveragain! horrid bestthingtoentermymouthallday)

8.times do |i|
  Review.create!(user_id: 1, cider_id: i+1, title: titles.sample, look_rating: Random.rand(5), smell_rating: Random.rand(5), taste_rating: Random.rand(5), feel_rating: Random.rand(5), overall_rating: Random.rand(5))

  Review.create!(user_id: 1, cider_id: i+1, title: titles.sample, look_rating: Random.rand(5), smell_rating: Random.rand(5), taste_rating: Random.rand(5), feel_rating: Random.rand(5), overall_rating: Random.rand(5))
end
