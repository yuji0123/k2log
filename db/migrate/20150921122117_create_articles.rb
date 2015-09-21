class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.text :title
      t.text :maintext

      t.timestamps null: false
    end
  end
end
