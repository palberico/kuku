const initialState = {
  products: []
}

const products = ( state = initialState, action) => {
  switch (action.type){
    case 'FETCH_PRODUCTS':
      return {
        products: action.products
      }
    case 'SET_PRODUCTS':
      return action.products
    default:
      return state;
  }
}

export default products
