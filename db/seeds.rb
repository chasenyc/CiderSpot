# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(username: "admin", password: "password", email: "admin@admin.com", birthdate: "1984-01-01")

images = %w(http://www.napacabs.com/media/extendware/ewimageopt/media/inline/be/a/red-stag-hardcore-cider-kentucky-straight-bourbon-whiskey-750ml-jim-beam-f35.jpg http://www.drinksupermarket.com/media/catalog/product/cache/1/thumbnail/75x/9df78eab33525d08d6e5fb8d27136e95/m/a/magners-apple-premium-irish-cider-500ml_1.jpg http://sc.soeagle.net/images/listings/thumb.php?src=/images/listings/products/logos/original/18451411411251311.jpg&h=75&w=75 http://static01.nyt.com/images/2015/09/17/business/17db-sabmiller-web1/17db-sabmiller-web1-thumbStandard.jpg)

cider_names = %w(apple banana orange maple fruit coal filthy sriracha)
cider_names.each do |name|
  Cider.create!(name: "#{name} cider", description: "wonderful #{name}, its a great cider.", brewery_id: Random.rand(11), style: Random.rand(11), abv: Random.rand(100), organic: 'Y', image_url: images.sample)
end

titles = %w(wonderful terrible lovely dirty filthy smelly neveragain! horrid bestthingtoentermymouthallday)

8.times do |i|
  Review.create!(user_id: 1, cider_id: i+1, title: titles.sample, look_rating: Random.rand(5), smell_rating: Random.rand(5), taste_rating: Random.rand(5), feel_rating: Random.rand(5), overall_rating: Random.rand(5))

  Review.create!(user_id: 1, cider_id: i+1, title: titles.sample, look_rating: Random.rand(5), smell_rating: Random.rand(5), taste_rating: Random.rand(5), feel_rating: Random.rand(5), overall_rating: Random.rand(5))
end
