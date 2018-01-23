import axios from 'axios';

export const fetchProducts = () => dispatch => {
  return axios.get('https://kukudb-ff7f7.firebaseio.com/products.json')
    .then( res => {
      axios.put('https://kukudb-ff7f7.firebaseio.com/unseen_items.json', res.data)
      dispatch({ type: 'FETCH_PRODUCTS', products: res.data})
    })
}

export const fetchUnseen = () => dispatch => {
  return axios.get('https://kukudb-ff7f7.firebaseio.com/unseen_items.json')
    .then( res => {
      // randomize
      let currentIndex = res.data.length, temporaryValue, randomIndex;
      while( 0 !== currentIndex ){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = res.data[currentIndex];
        res.data[currentIndex] = res.data[randomIndex];
        res.data[randomIndex] = temporaryValue;
      }
      let unseenItems = res.data.slice(0);
      dispatch({ type: 'FETCH_UNSEEN', products: unseenItems})
    })
}
