class Api::CartsController < ApplicationController
  before_action :set_product, only: [ :destroy, :update, :show ]

  def index
    render json: Cart.all
  end
  
  def show
    render json: @cart
  end

  def create
    cart = Cart.new(cart_params)
    if cart.save
      render json: cart
    else
      json_error(cart)
    end
  end

  def destroy
    @cart.destroy
  end

  def update
    if @cart.update(cart_params)
    else
    end
  end

  private
    def cart_params
      # params.require(:cart).permit
      # TODO
    end

    def set_cart
      @cart = Cart.find(params[:id])
    end
end