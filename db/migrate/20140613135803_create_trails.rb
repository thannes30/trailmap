class CreateTrails < ActiveRecord::Migration
  def change
    create_table :trails do |t|
      t.string :title
      t.string :state
      t.string :description
      t.integer :creator
      t.decimal :coords, array: true
      t.timestamps
    end
  end
end
