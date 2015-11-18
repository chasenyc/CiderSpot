# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(username: "admin", password: "password", email: "admin@admin.com", birthdate: "1984-01-01", avatar_url: "https://avatars2.githubusercontent.com/u/10642932?v=3&s=40")

images = %w(http://www.nooksyard.com/img/real-cider-perry-bottles.jpg http://urbanbohemian.com/wordpress/wp-content/uploads/2015/07/John-Wrights-mulled-cider-007.jpg http://static1.squarespace.com/static/56385064e4b0a7e4ee4d9de1/56385f6fe4b0936ed2c48cf0/5639a446e4b032ee6d40ffbd/1446618378042/cider+barn.jpg http://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2015/06/square_mile.jpg)

cider_names = %w(apple banana orange maple fruit coal filthy sriracha)
cider_names.each do |name|
  Cider.create!(name: "#{name} cider", description: "wonderful #{name}, its a great cider.", brewery_id: Random.rand(11), style: Random.rand(11), abv: Random.rand(100), organic: 'Y', image_url: images.sample)
end

titles = %w(wonderful terrible lovely dirty filthy smelly neveragain! horrid bestthingtoentermymouthallday)

adjectives = %w(best worst amazeballiest loveliest tastiest smelliest odoroust ugliest fattest skinniest grossest orgasmicist)

times = %w(day week minute year month hour second)

8.times do |i|
  Review.create!(user_id: 1, cider_id: i+1, title: titles.sample, look_rating: Random.rand(5), smell_rating: Random.rand(5), taste_rating: Random.rand(5), feel_rating: Random.rand(5), overall_rating: Random.rand(5),
  content: "This cider is the #{adjectives.sample} cider I have had in the last #{times.sample}.")

  Review.create!(user_id: 1, cider_id: i+1, title: titles.sample, look_rating: Random.rand(5), smell_rating: Random.rand(5), taste_rating: Random.rand(5), feel_rating: Random.rand(5), overall_rating: Random.rand(5),
  content: "This cider is the #{adjectives.sample} cider I have had in the last #{times.sample}.")
end
