class CreatePurchases < ActiveRecord::Migration[5.1]
  def change
    create_table :purchases do |t|
      t.string :products
      t.string :carts

      t.timestamps
    end
  end
end
