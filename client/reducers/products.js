const products = ( state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':{
      return {
        products: action.products
      }
    }
    case 'FETCH_UNSEEN':{
      return {
        unseen_products: action.unseen
      }
    }
    default:
      return state;
  }
};

export default products;
