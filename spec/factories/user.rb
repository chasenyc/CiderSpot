FactoryGirl.define do
    factory :user do |f|
        f.username "alex"
        f.email "aabb@hh.de"
        f.password "rubytuesday"
        f.birthdate "1/1/2010"
    end
end
