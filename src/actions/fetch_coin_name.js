export const FETCH_COIN_NAME = {
  SUCCESS: 'FETCH_COIN_NAME_SUCCESS',
  FAIL:    'FETCH_COIN_NAME_FAIL'
}

export function fetchCoinName(coinSymbol, coinList) {
  var actionType = FETCH_COIN_NAME.SUCCESS;
  console.log(coinSymbol);
  var name = '';

  if (!coinList) {
    console.log(coinList);
    name = coinList.Data[coinSymbol.toUpperCase()].CoinName;
  } else {
    console.log('FAIL!');
    actionType = FETCH_COIN_NAME.FAIL;
  }

  return {
    type: actionType,
    payload: name
  };
}
