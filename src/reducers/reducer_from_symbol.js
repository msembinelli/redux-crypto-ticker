import { SET_FROM_SYMBOL } from '../actions/set_symbols';

export default function(state = 'BTC', action) {
  switch(action.type) {
    case SET_FROM_SYMBOL:
      return action.payload;
  }
  return state;
}
