describe Cider do
  describe "presence" do
    it { should validate_presence_of :name }
    it { should validate_presence_of :description }
    it { should validate_presence_of :brewery_id }
    it { should validate_presence_of :style_id }
    it { should validate_presence_of :organic }
    it { should validate_presence_of :abv }
  end
end
