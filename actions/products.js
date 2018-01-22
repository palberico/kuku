import axios from 'axios';

export const fetchProducts = () => dispatch => {
  return axios.get('https://kukudb-ff7f7.firebaseio.com/products.json')
    .then( res => {
      dispatch({ type: 'FETCH_PRODUCTS', products: res.data })
    })
}

export const addToCart = (item) => dispatch => {
  return dispatch({ type: 'ADD_TO_CART', cartItem: item})
}
