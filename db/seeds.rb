# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(username: "alex", password: "password", email: "admin@admin.com", birthdate: "1984-01-01", avatar_url: "https://avatars2.githubusercontent.com/u/10642932?v=3&s=40")
User.create!(username: "sennacy", password: "password", email: "sennacy@sennacy.com", birthdate: "1984-01-01", avatar_url: "http://www.sennacy.com/sennacy.jpg")
User.create!(username: "jonathan", password: "password", email: "jonathan@sennacy.com", birthdate: "1984-01-01", avatar_url: "http://www.appacademy.io/assets/site/staff/jonathan-tamboer-93545a83000b93d43013595074bc22c6.jpeg")
User.create!(username: "lily", password: "password", email: "lily@appacademy.io", birthdate: "1984-01-01", avatar_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAANHAAAAJGY0ZTI4MTkzLWUzOGEtNDkxZC05YTE1LTgwMmJjYTFlYzY1Yg.jpg")
User.create!(username: "cody", password: "password", email: "cody@cody.com", birthdate: "1984-01-01", avatar_url: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/000/900/medium/cody-pizzaia.jpg?1443627497")

images = %w(http://www.ashridgecider.co.uk/wp-content/uploads/2012/04/Ashridge-Organic-Vintage-Cider4-e1335201238139.jpg http://www.acupuncturebrooklyn.com/wp-content/uploads/2014/01/Fire-Cider-by-Twefontaine.jpg http://edibledoor.com/files/2013/08/discoveryCider.jpg  http://urbanbohemian.com/wordpress/wp-content/uploads/2015/07/John-Wrights-mulled-cider-007.jpg http://static1.squarespace.com/static/56385064e4b0a7e4ee4d9de1/56385f6fe4b0936ed2c48cf0/5639a446e4b032ee6d40ffbd/1446618378042/cider+barn.jpg http://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2015/06/square_mile.jpg)

brewery_names = ['Fruitiest Fruits', 'Get Crunk', 'Hipstar', 'Pacesetter', 'Japan', 'Queens', 'Jiggle']

locations = ['New York', 'Cleveland', 'Chicago', 'Backyard', 'Bathtub']

10.times do
  Brewery.create!(name: "#{brewery_names.sample} Brewery", location: locations.sample)
end

cider_names = %w(Apple Banana Fire Liar Angel BadBoy Queens Maple Fruit Coal Filthy Sriracha)
cider_names.each do |name|
  Cider.create!(name: "#{name} Cider", description: "Wonderful #{name}, its a great cider. It was brewed by some of the finest brewers, some consumers have noticed similarities in the brewing style to #{brewery_names.sample}. It is an excellent choice with food or without.", brewery_id: Random.rand(9)+1, style: Random.rand(11), abv: Random.rand(100), organic: 'Y', image_url: images.sample)
end

adjectives = %w(best worst silliest loveliest tastiest smelliest odoroust ugliest fattest skinniest grossest lousiest)

times = %w(day week minute year month hour second)

cider_names.count.times do |i|
  Review.create!(user_id: 1, cider_id: i+1, look_rating: Random.rand(4)+1, smell_rating: Random.rand(4)+1, taste_rating: Random.rand(4)+1, feel_rating: Random.rand(4)+1, overall_rating: Random.rand(4)+1,
  content: "This cider is the #{adjectives.sample} cider I have had in the last #{times.sample}.")

  Review.create!(user_id: 2, cider_id: i+1, look_rating: Random.rand(4)+1, smell_rating: Random.rand(4)+1, taste_rating: Random.rand(4)+1, feel_rating: Random.rand(4)+1, overall_rating: Random.rand(4)+1,
  content: "This cider is the #{adjectives.sample} cider I have had in the last #{times.sample}.")

  Review.create!(user_id: 3, cider_id: i+1, look_rating: Random.rand(4)+1, smell_rating: Random.rand(4)+1, taste_rating: Random.rand(4)+1, feel_rating: Random.rand(4)+1, overall_rating: Random.rand(4)+1,
  content: "This cider is the #{adjectives.sample} cider I have had in the last #{times.sample}.")

  Review.create!(user_id: 4, cider_id: i+1, look_rating: Random.rand(4)+1, smell_rating: Random.rand(4)+1, taste_rating: Random.rand(4)+1, feel_rating: Random.rand(4)+1, overall_rating: Random.rand(4)+1,
  content: "This cider is the #{adjectives.sample} cider I have had in the last #{times.sample}.")

  Review.create!(user_id: 5, cider_id: i+1, look_rating: Random.rand(4)+1, smell_rating: Random.rand(4)+1, taste_rating: Random.rand(4)+1, feel_rating: Random.rand(4)+1, overall_rating: Random.rand(4)+1,
  content: "This cider is the #{adjectives.sample} cider I have had in the last #{times.sample}.")
end
