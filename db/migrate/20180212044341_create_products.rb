class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.text :alt1
      t.text :body
      t.string :gender
      t.string :handle
      t.text :img_src
      t.string :title
      t.string :type
      t.float :variant_price
      t.string :vendor
      t.text :address
      t.text :link
      t.text :logo

      t.timestamps
    end
  end
end
