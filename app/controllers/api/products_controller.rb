class Api::ProductsController < ApplicationController
  before_action :set_product, only: [ :destroy, :update, :show ]  

  def index
    render json: Product.all
  end

  def show
    render json: @product
  end
  
  def update
    if @product.update(product_params)
      render json: @product
    else
      json_error(@product)
    end
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      json_error(product)
    end
  end

  def destroy
    @product.destroy
  end

  private
    def product_params
      params.require(:product).permit(:alt1, :body, :gender, :handle, :img_src, :title, :type, :variant_price, :vendor, :address, :link, :logo)
    end

    def set_product
      @product = Product.find(params[:id])
    end
end
