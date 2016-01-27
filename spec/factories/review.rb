FactoryGirl.define do
    factory :review do |f|
        f.user_id "1"
        f.look_rating { 1 + rand(5) }
        f.smell_rating { 1 + rand(5) }
        f.taste_rating { 1 + rand(5) }
        f.feel_rating { 1 + rand(5) }
        f.overall_rating { 1 + rand(5) }

        association :cider
    end
end
