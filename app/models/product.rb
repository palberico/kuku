class Product < ApplicationRecord
  # TODO model stuff here for whatever we do for cart
  # probably needs a has_many_through... purchases?
  has_many :carts through :purchases
end
