import { FETCH_COIN_PRICE } from '../actions/fetch_coin_price';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_COIN_PRICE:
      return [ action.payload.data, ...state ];
  }
  return state;
}
