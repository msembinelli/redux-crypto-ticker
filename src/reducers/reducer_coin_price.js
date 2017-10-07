import { FETCH_COIN_PRICE_REQUEST, FETCH_COIN_PRICE_SUCCESS, FETCH_COIN_PRICE_FAILURE } from '../actions/fetch_coin_price';

const initialFormat = null;

export default function(state = initialFormat, action) {
  switch(action.type) {
    case FETCH_COIN_PRICE_REQUEST:
      return initialFormat;
    case FETCH_COIN_PRICE_SUCCESS:
      return action.payload.data.DISPLAY;
    case FETCH_COIN_PRICE_FAILURE:
      return initialFormat;
  }
  return state;
}
