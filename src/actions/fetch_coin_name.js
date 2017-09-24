export const FETCH_COIN_NAME = 'FETCH_COIN_NAME';

export function fetchCoinName(coinSymbol, coinList) {
  var name = coinList.Data[coinSymbol.toUpperCase()].CoinName;

  return {
    type: FETCH_COIN_NAME,
    payload: name
  };
}
