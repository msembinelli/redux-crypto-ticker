import { FETCH_COIN_PRICE, FETCH_COIN_PRICE_FAIL } from '../actions/fetch_coin_price';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COIN_PRICE:
      return action.payload.data;
    default:
      return state;
  }
}
