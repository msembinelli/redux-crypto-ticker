import { FETCH_COIN_HISTORICAL } from '../actions/fetch_coin_historical';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_COIN_HISTORICAL:
      return [ action.payload.data, ...state ];
  }
  return state;
}
