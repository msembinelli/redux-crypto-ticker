import { FETCH_COIN_LIST } from '../actions/fetch_coin_list';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COIN_LIST.SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
}
