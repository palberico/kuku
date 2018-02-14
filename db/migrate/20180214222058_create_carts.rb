class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.string :purchases
      t.float :total

      t.timestamps
    end
  end
end
