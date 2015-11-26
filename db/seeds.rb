# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(username: "alex", password: "password", email: "admin@admin.com", birthdate: "1984-01-01", image: File.open(File.join(Rails.root, '/app/assets/images/seed/users/alex.jpg')))
User.create!(username: "sennacy", password: "password", email: "sennacy@sennacy.com", birthdate: "1984-01-01", image: File.open(File.join(Rails.root, '/app/assets/images/seed/users/sennacy.jpg')))
User.create!(username: "jonathan", password: "password", email: "jonathan@sennacy.com", birthdate: "1984-01-01", image: File.open(File.join(Rails.root, '/app/assets/images/seed/users/jonathan.jpg')))
User.create!(username: "lily", password: "password", email: "lily@appacademy.io", birthdate: "1984-01-01", image: File.open(File.join(Rails.root, '/app/assets/images/seed/users/lily.jpg')))
User.create!(username: "tommy", password: "password", email: "tommy@appacademy.io", birthdate: "1984-01-01", image: File.open(File.join(Rails.root, '/app/assets/images/seed/users/tommy.jpg')))
User.create!(username: "cody", password: "password", email: "cody@cody.com", birthdate: "1984-01-01", image: File.open(File.join(Rails.root, '/app/assets/images/seed/users/cody.jpg')))
User.create!(username: "carl", password: "password", email: "carl@carl.com", birthdate: "1984-01-01", image: File.open(File.join(Rails.root, '/app/assets/images/seed/users/carl.jpg')))
User.create!(username: "dave", password: "password", email: "dave@hassan.com", birthdate: "1984-01-24", image: "http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/000/932/medium/david-hassan.jpg?1443627638")


styles = ['Dry Mead ',
'Semi-Sweet Mead',
'Sweet Mead',
'Cyser (Apple Melomel)',
'Pyment (Grape Melomel)',
'Other Fruit Melomel',
'Metheglin',
'Braggot',
'Open Category Mead',
'Common Cider',
'English Cider',
'French Cider',
'Common Perry',
'Traditional Perry',
'New England Cider',
'Fruit Cider',
'Apple Wine',
'Other Specialty Cider or Perry']

brewery_names = ['Fruitiest Fruits', 'Get Crunk', 'Hipstar', 'Pacesetter', 'Japan', 'Queens', 'Jiggle']

locations = ['New York', 'Cleveland', 'Chicago', 'Backyard', 'Bathtub']

10.times do
  Brewery.create!(name: "#{brewery_names.sample} Brewery", location: locations.sample)
end

cider_names = %w(Apple Banana Fire Liar Angel BadBoy Queens Maple Fruit Coal Filthy Sriracha AppAcademy ManBeard Willy Sloppy Vanilla Jerk Wild)
cider_names.each_with_index do |name, idx|
  Cider.create!(name: "#{name} Cider", description: "Wonderful #{name}, its a great cider. It was brewed by some of the finest brewers, some consumers have noticed similarities in the brewing style to #{brewery_names.sample}. It is an excellent choice with food or without.", brewery_id: Random.rand(9)+1, style_id: Random.rand(styles.size) + 1, abv: Random.rand(100), organic: 'Y',  image: File.open(File.join(Rails.root, "/app/assets/images/seed/ciders/#{(idx+1)}.jpg")))
end

adjectives = %w(best worst silliest loveliest tastiest smelliest odoroust ugliest fattest skinniest grossest lousiest)

times = %w(day week minute year month hour second)

cider_names.count.times do |i|
  User.all.count.times do |y|
    Review.create!(user_id: y+1, cider_id: i+1, look_rating: Random.rand(4)+1, smell_rating: Random.rand(4)+1, taste_rating: Random.rand(4)+1, feel_rating: Random.rand(4)+1, overall_rating: Random.rand(4)+1,
    content: "This cider is the #{adjectives.sample} cider I have had in the last #{times.sample}.")
  end
end

styles.each do |style|
  Style.create!(name: style, description: "This style of cider is often described as extremely #{adjectives}")
end

User.all.each do |user|

  (Random.rand(7)+1).times do
    cider_array = (1..Cider.all.count).to_a
    result = cider_array.sample
    cider_array = cider_array - [result]
    Got.create(user_id: user.id, cider_id: result)
  end

  (Random.rand(7)+1).times do
    cider_array = (1..Cider.all.count).to_a
    result = cider_array.sample
    cider_array = cider_array - [result]
    Want.create(user_id: user.id, cider_id: result)
  end

  (Random.rand(Review.all.count)+1).times do
    review_array = (1..Review.all.count).to_a
    result = review_array.sample
    review_array = review_array - [result]
    Like.create(user_id: user.id, review_id: result)
  end
end
