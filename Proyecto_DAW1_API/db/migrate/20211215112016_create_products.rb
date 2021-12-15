class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :subcategory
      t.string :picture
      t.integer :price
      t.integer :oldPrice
      t.string :description
      t.string :attributes
      t.string :quality
      t.string :company
      t.string :delivery
      t.integer :delivery_time
      t.string :stock
      t.boolean :bestSeller
      t.timestamps
    end
  end
end
