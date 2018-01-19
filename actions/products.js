import axios from 'axios';

export const setProducts = (products) => {
  return { type: 'SET_PRODUCTS', products: products }
}

export const fetchProducts = () => dispatch => {
  return axios.get('https://kuku-dfd4d.firebaseio.com/products.json')
    .then( res => {
      dispatch({ type: 'FETCH_PRODUCTS', products: res.data })
    })
}
