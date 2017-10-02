class CreateGears < ActiveRecord::Migration[5.1]
  def change
    create_table :gears do |t|
      t.string :manufacturer
      t.string :model_num
      t.integer :quantity
      t.string :gear_type
      t.string :date_made

      t.timestamps
    end
  end
end
