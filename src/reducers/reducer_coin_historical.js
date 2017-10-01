import { FETCH_COIN_HISTORICAL_REQUEST, FETCH_COIN_HISTORICAL_SUCCESS, FETCH_COIN_HISTORICAL_FAILURE } from '../actions/fetch_coin_historical';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COIN_HISTORICAL_REQUEST:
      return state;
    case FETCH_COIN_HISTORICAL_SUCCESS:
      return action.payload.data;
    case FETCH_COIN_HISTORICAL_FAILURE:
      return state;
  }
  return state;
}
