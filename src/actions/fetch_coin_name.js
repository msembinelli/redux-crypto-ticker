export const FETCH_COIN_NAME = 'FETCH_COIN_NAME';
export const FETCH_COIN_NAME_NOT_FOUND = 'FETCH_COIN_NAME_NOT_FOUND';

export function createCoinNameAction(name) {
  return {
    type: FETCH_COIN_NAME,
    payload: name
  };
}

export function fetchCoinName(symbol) {
  return (dispatch, getState) => {
    // Fetching from the coinList that is in the store
      return dispatch(createCoinNameAction(getState().coinList.Data[symbol].CoinName))
  }
}
