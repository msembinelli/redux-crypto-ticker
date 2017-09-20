import { FETCH_COIN_NAME } from '../actions/fetch_coin_name';

export default function(state = 'Bitcoin', action) {
  switch(action.type) {
    case FETCH_COIN_NAME:
      return action.payload;
  }
  return state;
}
