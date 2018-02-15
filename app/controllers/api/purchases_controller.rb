class Api::PurchasesController < ApplicationController
  before_action :set_purchase, only: [ :destroy, :update, :show ]

  def index
    render json: Purchase.all
  end

  def create
  end

  def show
  end

  def destroy
  end

  def update
  end
end
