import { FETCH_COIN_NAME } from '../actions/fetch_coin_name';

const initialName = 'Bitcoin';

export default function(state = initialName, action) {
  switch(action.type) {
    case FETCH_COIN_NAME:
      return action.payload;
  }
  return state;
}
