require 'byebug'

describe Cider do

  describe "presence" do
    it { should validate_presence_of :name }
    it { should validate_presence_of :description }
    it { should validate_presence_of :brewery_id }
    it { should validate_presence_of :style_id }
    it { should validate_presence_of :organic }
    it { should validate_presence_of :abv }
  end

  describe "uniqueness" do
    subject { build(:cider) }
    it { should validate_uniqueness_of :name }
  end

  describe "associations" do
    it { should have_many :reviews }
    it { should have_many :wants }
    it { should have_many :gots }
    it { should belong_to :brewery }
    it { should belong_to :style }
  end

  describe "attachment" do
    it { should have_attached_file :image }
    it { should validate_attachment_content_type(:image).
              allowing('image/png', 'image/gif').
              rejecting('text/plain', 'text/xml') }
  end

  describe "filters" do
    let!(:cider_one) { FactoryGirl.create(:cider_with_reviews) }
    let!(:cider_two) { FactoryGirl.create(:cider_with_reviews) }
    let!(:cider_three) { FactoryGirl.create(:cider_with_reviews) }
    describe "self.top_rated" do
      it "should return reviews from highest total score descending" do
        result_one, result_two, result_three = Cider.top_rated
        expect(result_one.average >= result_two.average).to eq(true)
        expect(result_two.average >= result_three.average).to eq(true)
      end
    end

    describe "self.bottom_rated" do
      it "should return reviews from lowest total score ascending" do
        result_one, result_two, result_three = Cider.bottom_rated
        expect(result_one.average <= result_two.average).to eq(true)
        expect(result_two.average <= result_three.average).to eq(true)
      end
    end

    describe "self.most_recently_updated" do
      it "should return most recently updated ciders first" do
        result_one, result_two, result_three = Cider.most_recently_updated
        expect(result_one.updated_at >= result_two.updated_at).to eq(true)
        expect(result_two.updated_at >= result_three.updated_at).to eq(true)
      end
    end

    describe "self.most_recently_updated" do
      it "should return least recently updated ciders first" do
        result_one, result_two, result_three = Cider.least_recently_updated
        expect(result_one.updated_at <= result_two.updated_at).to eq(true)
        expect(result_two.updated_at <= result_three.updated_at).to eq(true)
      end
    end
  end

end
