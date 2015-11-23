# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151123161324) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "breweries", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "location",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ciders", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description", null: false
    t.integer  "brewery_id",  null: false
    t.integer  "style_id",    null: false
    t.string   "organic",     null: false
    t.float    "abv",         null: false
    t.string   "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "ciders", ["brewery_id"], name: "index_ciders_on_brewery_id", using: :btree

  create_table "gots", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "cider_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "gots", ["cider_id"], name: "index_gots_on_cider_id", using: :btree
  add_index "gots", ["user_id"], name: "index_gots_on_user_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "review_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["review_id"], name: "index_likes_on_review_id", using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",                      null: false
    t.integer  "cider_id",                     null: false
    t.text     "content"
    t.float    "look_rating",                  null: false
    t.float    "smell_rating",                 null: false
    t.float    "taste_rating",                 null: false
    t.float    "feel_rating",                  null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.float    "overall_rating", default: 3.0, null: false
  end

  add_index "reviews", ["cider_id"], name: "index_reviews_on_cider_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "styles", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                           null: false
    t.string   "email",                              null: false
    t.string   "password_digest",                    null: false
    t.string   "session_token",                      null: false
    t.date     "birthdate",                          null: false
    t.boolean  "admin",              default: false, null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

  create_table "wants", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "cider_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "wants", ["cider_id"], name: "index_wants_on_cider_id", using: :btree
  add_index "wants", ["user_id"], name: "index_wants_on_user_id", using: :btree

  add_foreign_key "gots", "ciders"
  add_foreign_key "gots", "users"
  add_foreign_key "likes", "reviews"
  add_foreign_key "likes", "users"
  add_foreign_key "wants", "ciders"
  add_foreign_key "wants", "users"
end
