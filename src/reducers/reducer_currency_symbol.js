import { SET_CURRENCY_SYMBOL } from '../actions/set_currency_symbol';

const initialCurrencySymbol = {
  'fromSymbol': 'BTC',
  'toSymbol':   'USD'
};

export default function(state = initialCurrencySymbol , action) {
  switch(action.type) {
    case SET_CURRENCY_SYMBOL:
      return action.payload;
    default:
      return state;
  }
}
