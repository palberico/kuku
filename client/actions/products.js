import axios from 'axios';

export const fetchProducts = () => dispatch => {
  return axios.get('https://kukudb-ff7f7.firebaseio.com/products.json')
    .then( res => {

      let unseenItems = res.data.slice(0);
      axios.put('https://kukudb-ff7f7.firebaseio.com/unseen_items.json', unseenItems)
      axios.delete('https://kukudb-ff7f7.firebaseio.com/cart.json')
      axios.delete('https://kukudb-ff7f7.firebaseio.com/dislike.json')
      dispatch({ type: 'FETCH_PRODUCTS', products: res.data})
    })
}

export const fetchUnseen = () => dispatch => {
  return axios.get('https://kukudb-ff7f7.firebaseio.com/unseen_items.json')
    .then( res => {
      dispatch({ type: 'FETCH_UNSEEN', unseen: res.data })
    })
}
