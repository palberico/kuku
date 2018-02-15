class Cart < ApplicationRecord
  has_many :products through :purchases
end
