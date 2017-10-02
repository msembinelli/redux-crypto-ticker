import { SET_TO_SYMBOL } from '../actions/set_symbols';

export default function(state = 'USD', action) {
  switch(action.type) {
    case SET_TO_SYMBOL:
      return action.payload;
  }
  return state;
}
