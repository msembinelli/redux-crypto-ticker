export const SET_CURRENCY_SYMBOL = 'SET_CURRENCY_SYMBOL';

export function setCurrencySymbol(fromSymbol, toSymbol) {
  return {
    type: SET_CURRENCY_SYMBOL,
    payload: {fromSymbol, toSymbol}
  };
}
