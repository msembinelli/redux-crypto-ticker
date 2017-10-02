export const SET_TO_SYMBOL = 'SET_TO_SYMBOL';

export function setToSymbol(toSymbol) {
  return {
    type: SET_TO_SYMBOL,
    payload: toSymbol
  };
}

export const SET_FROM_SYMBOL = 'SET_FROM_SYMBOL';

export function setFromSymbol(fromSymbol) {
  return {
    type: SET_FROM_SYMBOL,
    payload: fromSymbol
  };
}
