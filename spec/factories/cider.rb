FactoryGirl.define do
  factory :cider do |f|
    f.name { "cider #{rand(1000).to_s}" }
    f.description "great fire cider"
    f.brewery_id "1"
    f.style_id "1"
    f.abv "5.1"
    f.organic "true"
    f.updated_at { rand(10).minutes.from_now }

    factory :cider_with_reviews do
      after(:create) do |cider|
        create(:review, cider: cider)
        create(:review, cider: cider)
        create(:review, cider: cider)
      end
    end
  end
end
