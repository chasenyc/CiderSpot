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
