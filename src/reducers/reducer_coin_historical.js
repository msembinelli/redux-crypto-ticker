import { FETCH_COIN_HISTORICAL } from '../actions/fetch_coin_historical';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COIN_HISTORICAL.SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
  return state;
}
