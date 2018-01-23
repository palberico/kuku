const products = ( state = {}, action) => {
  switch (action.type){
    case 'FETCH_PRODUCTS':{
      return {
        products: action.products
      }
    };
    case 'SET_PRODUCTS':{
      return{
        products: action.products
      }
    }
    default:
      return state;
  }
}

export default products;
