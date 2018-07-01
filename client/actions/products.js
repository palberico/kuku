import axios from 'axios';
import { API_URL } from '../utils/urls';

export const fetchProducts = () => dispatch => {
  return axios.get('https://kukudb-ff7f7.firebaseio.com/products.json')
    .then( res => {
      let unseenItems = res.data.slice(0);
      axios.put('https://kukudb-ff7f7.firebaseio.com/unseen_items.json', unseenItems)
      axios.delete('https://kukudb-ff7f7.firebaseio.com/cart.json')
      axios.delete('https://kukudb-ff7f7.firebaseio.com/dislike.json')
      dispatch({ type: 'FETCH_PRODUCTS', products: res.data })
    })
};

export const fetchUnseen = () => dispatch => {
  return axios.get('https://kukudb-ff7f7.firebaseio.com/unseen_items.json')
    .then( res => {
      dispatch({ type: 'FETCH_UNSEEN', unseen: res.data })
    })
};

export const addToCart = () => dispatch => {
  dispatch({ type: 'ADD_COUNT', count: 1 })
};

export const subtractToCart = () => dispatch => {
  dispatch({ type: 'SUB_COUNT', count: 1 })
};

export const resetCart = () => dispatch => {
  dispatch({ type: 'RESET_COUNT', count : 0 })
};
