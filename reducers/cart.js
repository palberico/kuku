const cart = ( state = { cart: [] }, action ) => {
  switch(action.type){
    case 'ADD_TO_CART':{
      return {
        cart: [...state.cart, action.cartItem]
      }
    }
    default:
      return state;
  }
}

export default cart
