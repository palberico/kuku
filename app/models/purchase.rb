class Purchase < ApplicationRecord
  has_many :products
  has_many :carts
end
