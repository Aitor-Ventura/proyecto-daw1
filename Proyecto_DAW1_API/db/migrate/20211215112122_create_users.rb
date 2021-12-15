class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :address
      t.string :country
      t.string :phonenumber
      t.string :city
      t.string :postcode
      t.timestamps
    end
  end
end
