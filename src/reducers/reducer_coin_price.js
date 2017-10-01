import { FETCH_COIN_PRICE_REQUEST, FETCH_COIN_PRICE_SUCCESS, FETCH_COIN_PRICE_FAILURE } from '../actions/fetch_coin_price';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COIN_PRICE_REQUEST:
      return state;
    case FETCH_COIN_PRICE_SUCCESS:
      return action.payload.data;
    case FETCH_COIN_PRICE_FAILURE:
      return state;
  }
  return state;
}
