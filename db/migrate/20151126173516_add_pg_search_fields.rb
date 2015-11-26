class AddPgSearchFields < ActiveRecord::Migration
  def up
    execute "CREATE EXTENSION unaccent"
    execute "CREATE EXTENSION fuzzystrmatch"
  end

  def down
    execute "drop extension unaccent"
    execute "drop extension fuzzystrmatch"
  end
end
