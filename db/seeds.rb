# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

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

Cider.create!(
  name: "Adam's Cider",
  description: "Hand-crushed, in-house blend of Batlow grown Granny Smith and Red Delicious apples. Taste the fresh orchard flavour.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "5.6",
  organic: "N",
  image: "http://www.realciderreviews.com/wp-content/uploads/2014/11/Adams-Orchard-Cider-1000x600.jpg"
)

Cider.create!(
  name: "Apple Roughy Cider",
  description: "dry organic apple cider. A great mix of Sturmers, Grannies and other random  apples from around the hood. Rough 'n country as it should be!",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "4",
  organic: "Y",
  image:  "http://blog.wabisabigreen.com/hp_wordpress/wp-content/uploads/maggie-beer-cider.jpg"
)

Cider.create!(
  name: "Aragon 1904",
  description: "Aragon 1904 Blue Bee Cider produces its ciders in a turn-of-the-20th-century coffee warehouse along the James River in Richmond’s Old Manchester district. The first records of the Aragon Coffee building are dated 1904, a time when coffee was often traded for tobacco down the river to the Atlantic Ocean and beyond. Blue Bee Cider makes ARAGON 1904 from a blend of modern and heirloom apple varieties to create a light, crisp, off-dry cider. It pairs well with many dishes making it suitable for special occasions, barbecues, or just by itself on a hot summer day.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "8.6",
  organic: "N",
  image: "http://richmondbizsense.com/images/Blue-Bee-Cider.jpg"
)


Cider.create!(
  name: "Breakfast Magpie",
  description: "Rich blackberry & espresso mead; heady coffee aroma w/ deep black raspberry notes mixed with chocolate and coffee.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "8",
  organic: "N",
  image: "http://pbs.twimg.com/media/B-UVC4nCQAADUhF.jpg"
)

Cider.create!(
  name: "Cidre Nouveau",
  description: "On an autumn afternoon along La Route du Cidre in Northern France, a crisp, misty air rolls in from off the shores of Normandy, through rustic family farms, rolling pastures, and orchard beds lined with freshly fallen apples. Along Michigan’s Cider Coast, fall is ushered in by chilled lake air, falling leaves, and ripe apples. Virtue's Cidre Nouveau celebrates these sensations of fall and the promise of an autumn harvest ready to be fulfilled. Released each November, this young, dry, and vibrant sparkling cider is a worthy addition to the harvest treasures that will line your holiday table.",
  abv: "6",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  organic: "N",
  image: "http://virtuecider.com/wp-content/uploads/cidre-nouveau-500x3001.jpg"
)

Cider.create!(
  name: "Cuvée Chevallier",
  description: "Double fermenting, a technique that was used in the 1920's by JB Chevallier, the 5th generation of cyder makers at Aspall, to produce a highly refined cyder similar in style to a sparkling wine. A clear sparkling cyder, pale straw in colour with a fine mousse. Cuvée is dry but rounded with mouthfilling body and fruit. It has a complex appley palate with floral notes and a good lingering finish.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "11",
  organic: "N",
  image: "http://drinkwiththewench.com/wp-content/uploads/2009/12/Aspall-Cuvee-front.jpg"
)

Cider.create!(
  name: "Farmhouse Dry Cider",
  description: "Pale gold and effervescent with pronounced fruit aroma hinting of peach and melon. Don’t let the heady nose fool you - with no residual sugars, the flavor is crisp, tart, and exceptionally dry. Uniquely refreshing with a crisp  finish that pairs well with foods that are rich or salty.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "8.5",
  organic: 'N',
  image: 'http://www.foodlovesbeermagazine.com/uploads/7/0/6/3/7063385/1233201.jpg?756'
)

Cider.create!(
  name: "Ginger Bite",
  description: "Ginger Bite spices up this band of Outlaws! Made with a delicious blend of apples and Peruvian yellow ginger at our family-owned orchard in the Applegate, Ginger Bite is bursting with apple aromas and the spicy zing of ginger. The combo packs a punch sure to reward your rebellious palate, should you be so adventurous.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: '7.9',
  organic: 'N',
  image: "http://rosieeats.com/wp-content/uploads/2013/03/IMG_7925.jpg"
)

Cider.create!(
  name: "Green Goblin",
  description: "Green Goblin is a 'full bittersweet' style of cider, using all English cider apples, including Dabinett and Somerset Redstreak varieties. The apples mostly come from West Country orchards, managed much as they always have been, including the arrival of the bees in the spring to pollinate the blossom in the trees. The apples are harvested in September and are pressed in our cider mill to extract the juice, which is then taken to the vat house. In a carefully controlled environment, fermentation is instigated by the introduction of a selected yeast. Once fermented the cider is transferred to oak vats for maturation. Cider apple harvest - image credit The National Association of Cider MakersGreen Goblin Cider is aged in 100-year-old oak vats, which gives it a unique character and flavour. Once the matured ciders have been combined and blended into the finished cider it is ready for drinking. As a company Thatchers combines the latest modern innovations and technology alongside original recipes and techniques used in the 1900s.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "6",
  organic: "Y",
  image: "https://ohmansmatovin.files.wordpress.com/2011/07/green-goblin.jpg"
)

Cider.create!(
  name: "Hard Apple Cider",
  description: "The brainchild of three friends and a dog South City Cider was created out of necessity. The necessity for a hard apple cider that isn’t overly sweet, well balanced, and won’t break your budget to drink. South City Cider is made with West Coast Apples. Upon taking your first sip you will notice the bright sweet flavor of fresh picked dessert apples that rolls into a tart finish that leaves your mouth wanting another sip.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "4.5",
  organic: "N",
  image: "http://static1.squarespace.com/static/5473e084e4b039279a760091/54f8fa43e4b0d8458d5d071e/54f8fa8ee4b0470c7ec90b1e/1425603636963/SampleFourPacks.jpg?format=1500w"
)

Cider.create!(
  name: "Honey Crispin",
  description: "New Crispin Honey Crisp Artisanal Reserve™ is a small batch, hand crafted, super-premium hard apple cider smoothed with real organic honey for a rich, creamy, full-bodied crisp taste. Smooth over ice. Cloudy Hard Cider™. For the discerning drinker, Honey Crisp’s artisanal style is embodied in our unique Cloudy Filtration™ process, using racked unfiltered apple wine that leaves residual natural apple wine sediment in the bottle. Every bottle should receive a full Bottoms-Up! tilt and swirl before opening and enjoying. Naturally fermented using a premium apple juice blend, not from apple juice concentrate, with no added malt, spirit or grape alcohol. Honey Crisp is smoothed with pure organic honey, with no added sugar, colorants or sorbate or benzoate preservatives. Honey Crisp's apple juice is a fresh pressed blend of 3 to 5 different apples. We do not use the Honeycrisp apple, a very fine dessert eating apple, but in our experience and in our opinion, not a fine base for apple wine.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "6.5",
  organic: "N",
  image: "http://www.crispinoverice.com/assets/Uploads/Chotokkyo8.jpg"
)

Cider.create!(
  name: "Pear Cider",
  description: "The Inspiration for our small batch fruit ciders came from a brief stay in the Domfront area of Normandy.\r\n\r\nThis particular area of France is renowned for its Pear and Apple Brandy or Cavardos. Many of the pear varieties have no names and are picked from trees that are over 200 years old; they are part of the history and rich culture of the area.\r\nOur fruit ciders are made with our own carefully selected apple cider which is back blended with natural fruit flavours, essences and juice.\r\nOur homage to Normandy.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: '6.5',
  organic: 'N',
  image: "https://teepoo.files.wordpress.com/2015/09/dscf3532.jpg"
)

Cider.create!(
  name: "Perronelle's Blush",
  description: "This recipe reflects the joy and satisfaction Perronelle Chevallier, a renowned forager and long time Aspall matriarch, took from harvesting the blackberries in the hedgerows around the orchards at Aspall. Salmon pink in colour, Perronelle's Blush has an excellent nose comprising a floral, appley and fruit aroma. Attractive apple & blackberry flavours define a sweetish palate, with good acid balance and a long finish of soft fruit flavour, and blackberry tones that enhance the finish.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "4",
  organic: "N",
  image: "http://winetime.com.ua/modules/pages/files/139403890726_54701.jpg"
)

Cider.create!(
  name: "Scrumpy Cider",
  description: "This classic cider is crafted in the farmhouse tradition of southwestern England. Fresh pressed juices of sweet, bitter, aromatic and tart apples are blended to provide a tantalizing parade of distinctive taste experiences. Because less of the apple is filtered out, it is full of flavor, more robust, darker and cloudier than most ciders.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "7.5",
  organic: "N",
  image: "http://www.flippinggoodbeershop.co.uk/wp-content/uploads/Westons-Scrumpy-Cloudy-Cider-2L.jpg"
)

Cider.create!(
  name: "See Canyon Hard Cider",
  description: "Our hand crafted California Hard Cider is the optimal blend of apple sweetness with a crisp, slightly tart finish - just like biting into the perfect apple. See Canyon Hard Cider is a smooth and refreshing beverage that delights both cider-heads and new comers. We use only the best apples to create extraordinary aroma, flavor, and balance. 100% apples, we never add high fructose corn syrup or sugar and it’s gluten-free.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "7.5",
  organic: "N"
  image: "https://lh6.googleusercontent.com/-jMojoEuoIX0/UkxfApN3VbI/AAAAAAAAAAQ/qagaXnHHUAo/w800-h800/See_Canyon_Hrad_Cider_%C2%A9.jpg"
)

Cider.create!(
  name: "Sidra De Nava",
  description: "Sidra de Nava is a tart, lemony summer Spanish-style sidra. The Asturias region produces 80% of the Sidra in Spain, and the Asturian summer is something to behold. The skies are clear and blue, the cafés full, and Sidra reigns supreme. Every café and Sidrería pours it – either ’thrown’ from a bottle or pipa (pitcher) held high overhead or straight from the kupela (barrel). Afternoon drinking under those blue skies leads to long nights of music, dancing and of course, more Sidra. The climax of the summer is the Festival de la Sidra in the village of Nava, held each July. Virtue’s Sidra de Nava is more tart than the dry ciders of England or funky cidre from France. It’s lemony nose and bracingly tart dry finish are a happy intersection of cider, dry white wine and fresh squeezed lemonade. It’s the most refreshing of drinks, pure sunshine in a glass.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "5.2",
  organic: "N",
  image: "https://s3.amazonaws.com/brewerydbapi/beer/n7X4sh/upload_N3jtCZ-large.png"
)

Cider.create!(
  name: "The Dirty Mayor",
  description: "We offer this cider to the honorable and fully infamous mayor of the only non-town in America, Fort Ethan Allen, USA. The mayor likes his cider with a ginger nip, so in our current effort to ensure local harmony and diplomacy we offer this cider up to the mayor and his fellow citizens.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "6.9",
  organic: "N",
  image: "http://thegirlandherbeer.com/wp-content/uploads/2015/08/citizen-cider-dirty-mayor.png"
)

Cider.create!(
  name: "The Early Man",
  description: "This light bodied estate cider is a select blend of our early maturing heirloom apples, featuring McIntosh and Gravenstein - from our original orchard stock. While still a dry cider, the Early Man is crisp with a light fruitiness that preserves those last remaining notes of summer. GLUTEN FREE!",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "7.5",
  organic: "Y",
  image: "http://www.thetowndish.com/files/2011/05/IMG_8660.jpg"
)

Cider.create!(
  name: "The Full Nelson",
  description: "This is a ‘welcome’ and a ‘hello’ to all the beer drinkers out there willing to take a chance on hard cider. Reach across the aisle and experience this bright, citrusy, easy-drinking cider. This cider is made with fresh sweet cider pressed at Happy Valley Orchard in Middlebury, Vermont and dry-hopped with Nelson Sauvin hops. We can all get along.",
  brewery_id: (Random.rand(Brewery.all.count) + 1),
  style_id: (Random.rand(styles.size) + 1),
  abv: "6.9",
  organic: "Y",
  image: "http://thegirlandherbeer.com/wp-content/uploads/2015/08/citizen-cider-the-full-nelson.png"
)

adjectives = %w(best worst silliest loveliest tastiest smelliest odoroust ugliest fattest skinniest grossest lousiest)

times = %w(day week minute year month hour second)

styles.each do |style|
  Style.create!(name: style, description: "This style of cider is often described as extremely #{adjectives}")
end

User.all.each do |user|

  review_cider_array = (1..Cider.all.count).to_a
  (Random.rand(15)+(Cider.all.count-15)).times do
    result = review_cider_array.sample
    review_cider_array = review_cider_array - [result]
    description = Faker::Hipster.paragraph
    Review.create(
      user_id: user.id,
      cider_id: result,
      look_rating: Random.rand(3)+2,
      smell_rating: Random.rand(3)+2,
      taste_rating: Random.rand(3)+2,
      feel_rating: Random.rand(3)+2,
      overall_rating: Random.rand(3)+2,
      content: description
    )
  end

  got_cider_array = (1..Cider.all.count).to_a
  (Random.rand(15)+1).times do
    result = got_cider_array.sample
    got_cider_array = got_cider_array - [result]
    Got.create(user_id: user.id, cider_id: result)
  end

  want_cider_array = (1..Cider.all.count).to_a
  (Random.rand(15)+1).times do
    result = want_cider_array.sample
    want_cider_array = want_cider_array - [result]
    Want.create(user_id: user.id, cider_id: result)
  end

  like_review_array = (1..Review.all.count).to_a
  (Random.rand(20)+(Review.all.count-20)).times do
    result = like_review_array.sample
    like_review_array = like_review_array - [result]
    Like.create(user_id: user.id, review_id: result)
  end
end
