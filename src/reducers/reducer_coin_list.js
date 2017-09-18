import { FETCH_COIN_LIST } from '../actions/fetch_coin_list';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_COIN_LIST:
      return [ action.payload.data, ...state ];
  }
  return state;
}
