import { FETCH_COIN_PRICE_HISTORICAL_REQUEST, FETCH_COIN_PRICE_HISTORICAL_SUCCESS, FETCH_COIN_PRICE_HISTORICAL_FAILURE } from '../actions/fetch_coin_price';

const initialFormat = null;

export default function(state = initialFormat, action) {
  switch(action.type) {
    case FETCH_COIN_PRICE_HISTORICAL_REQUEST:
      return state;
    case FETCH_COIN_PRICE_HISTORICAL_SUCCESS:
      return action.payload.data.Data;
    case FETCH_COIN_PRICE_HISTORICAL_FAILURE:
      return state;
  }
  return state;
}
