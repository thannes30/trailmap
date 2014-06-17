class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.integer :trail_id
      t.timestamps
    end
    remove_column :trails, :creator
  end
end
