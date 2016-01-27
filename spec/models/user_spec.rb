describe User do

  describe "presence" do
    it { should validate_presence_of :username }
    it { should validate_presence_of :email }
    it { should validate_presence_of :password_digest }
    it { should validate_presence_of :session_token }
    it { should validate_presence_of :birthdate }
    it { should validate_length_of(:password).is_at_least 6 }
  end

  describe "uniqueness" do
    subject { build(:user) }
    it { should validate_uniqueness_of :username }
    it { should validate_uniqueness_of :email }
    it { should validate_uniqueness_of :session_token }
  end

  describe "associations" do
    it { should have_many :reviews }
    it { should have_many :wants }
    it { should have_many :wanted_ciders }
    it { should have_many :gotten_ciders }
    it { should have_many :reviewed_ciders }
    it { should have_many :gots }
    it { should have_many :likes }
    it { should have_many :posts }
  end

  describe "attachment" do
    it { should have_attached_file :image }
    it { should validate_attachment_content_type(:image).
              allowing('image/png', 'image/gif').
              rejecting('text/plain', 'text/xml') }
  end

  describe "after_initialize" do
    it 'should call #ensure_session_token' do
      user = User.allocate
      expect(user).to receive(:ensure_session_token)
      user.send(:initialize)
    end
  end

  describe "self.find_by_credentials" do
    before(:each) do
      User.create!(username: "alex", password: "password", email: "admin@admin.com", birthdate: Faker::Date.between(23.years.ago, 35.years.ago))
    end

    it "should return nil if no user is found" do
      user = User.find_by_credentials('bob', 'password')
      expect(user).to eq(nil)
    end

    it "should return nil if credentials are not valid" do
      user = User.find_by_credentials('alex', 'password2')
      expect(user).to eq(nil)
    end

    it "should return user if credentials are valid" do
      user = User.find_by_credentials('alex', 'password')
      expect(user).not_to eq(nil)
    end
  end

  describe "#is_password?" do
    before(:each) do
      @user = build(:user)
      @user.password=("password")
    end

    it "returns true if the password is correct" do
      expect(@user.is_password?("password")).to be true
    end

    it "returns false if the password is incorrect" do
      expect(@user.is_password?("password1")).to be false
    end

    it "returns false when given nil" do
      expect(@user.is_password?(nil)).to be false
    end
  end

  describe "#password=" do
    before(:each) do
      @user = build(:user)
      @user.password=("password")
    end

    it "sets the instance variable @password" do
      expect(@user.password).to eq("password")
    end

    it "sets an attribute password_digest" do
      expect(@user.password_digest).to_not be_nil
    end

    it "password_digest and password are not the same" do
      expect(@user.password).not_to eq(@user.password_digest)
    end
  end

  describe "#reset_session_token" do
    before(:each) do
      @user = build(:user)
    end

    it "changes the session_token" do
      old_token = @user.session_token
      @user.reset_session_token!
      expect(@user.session_token).not_to eq(old_token)
    end

    it "returns the new session token" do
      token = @user.reset_session_token!
      expect(@user.session_token).to eq(token)
    end

    it "persists changes to the database" do
      expect(@user).to receive(:save!)
      @user.reset_session_token!
    end
  end

  describe "#ensure_session_token" do
    before(:each) do
      @user = build(:user)
    end

    it "generates token if no token exists" do
      @user.session_token = nil
      @user.ensure_session_token
      expect(@user.session_token).not_to eq(nil)
    end

    it "does not generate another session_token if one already exists" do
      token = @user.session_token
      @user.ensure_session_token
      expect(@user.session_token).to eq(token)
    end
  end


end
