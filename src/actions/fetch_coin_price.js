import { axiosFetch, REQUEST, SUCCESS, FAILURE } from './api_utils';

const PRICE_URL = 'https://min-api.cryptocompare.com/data/pricemultifull';
export const FETCH_COIN_PRICE = 'FETCH_COIN_PRICE_';
export const FETCH_COIN_PRICE_REQUEST = FETCH_COIN_PRICE + REQUEST;
export const FETCH_COIN_PRICE_SUCCESS = FETCH_COIN_PRICE + SUCCESS;
export const FETCH_COIN_PRICE_FAILURE = FETCH_COIN_PRICE + FAILURE;

export function fetchCoinPrice(fromSymbol, toSymbol) {
  return axiosFetch(FETCH_COIN_PRICE, `${PRICE_URL}?fsyms=${fromSymbol}&tsyms=${toSymbol}`);
}
