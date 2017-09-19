import { FETCH_COIN_HISTORICAL } from '../actions/fetch_coin_historical';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COIN_HISTORICAL:
      return action.payload.data;
  }
  return state;
}
