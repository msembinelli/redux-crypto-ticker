import axios from 'axios';
const ROOT_URL = 'https://min-api.cryptocompare.com/data/pricemultifull';
export const FETCH_COIN_PRICE = 'FETCH_COIN_PRICE';
export const FETCH_COIN_PRICE_FAIL = 'FETCH_COIN_PRICE_FAIL';

export function fetchCoinPrice(fromSymbol, toSymbol) {
  var actionType = FETCH_COIN_PRICE;
  const url = `${ROOT_URL}?fsyms=${fromSymbol}&tsyms=${toSymbol}`;
  const request = axios.get(url).catch(actionType = FETCH_COIN_PRICE_FAIL);
  //console.log(request);

  return {
    type: actionType,
    payload: request
  };
}
