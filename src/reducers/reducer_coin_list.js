import { FETCH_COIN_LIST_SUCCESS, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_FAILURE } from '../actions/fetch_coin_list';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COIN_LIST_REQUEST:
      return state;
    case FETCH_COIN_LIST_SUCCESS:
      return action.payload.data;
    case FETCH_COIN_LIST_FAILURE:
      return state;
  }
  return state;
}
