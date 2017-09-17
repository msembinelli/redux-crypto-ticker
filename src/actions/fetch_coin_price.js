import axios from 'axios';
const ROOT_URL = 'https://min-api.cryptocompare.com/data/pricemultifull';
export const FETCH_COIN_PRICE = 'FETCH_COIN_PRICE';

export function fetchCoinPrice(fromSymbol, toSymbol) {
 const url = `${ROOT_URL}?fsyms=${fromSymbol}&tsyms=${toSymbol}`;
 const request = axios.get(url);
 //console.log(request);

  return {
    type: FETCH_COIN_PRICE,
    payload: request
  };
}
