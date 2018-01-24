const cart = ( state = 0, action ) => {
  switch(action.type){
    case 'ADD_COUNT':
      return state + action.count;
    case 'SUB_COUNT':
      return state - action.count;
    default:
      return state;
  }
}
export default cart;
