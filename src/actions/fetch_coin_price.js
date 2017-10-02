import { axiosFetch, REQUEST, SUCCESS, FAILURE } from './api_utils';

const COIN_PRICE_URL = 'https://min-api.cryptocompare.com/data/pricemultifull';
export const FETCH_COIN_PRICE = 'FETCH_COIN_PRICE_';
export const FETCH_COIN_PRICE_REQUEST = FETCH_COIN_PRICE + REQUEST;
export const FETCH_COIN_PRICE_SUCCESS = FETCH_COIN_PRICE + SUCCESS;
export const FETCH_COIN_PRICE_FAILURE = FETCH_COIN_PRICE + FAILURE;

const COIN_PRICE_HISTORICAL_URL = 'https://min-api.cryptocompare.com/data/histo';
export const FETCH_COIN_PRICE_HISTORICAL = 'FETCH_COIN_PRICE_HISTORICAL_';
export const FETCH_COIN_PRICE_HISTORICAL_REQUEST = FETCH_COIN_PRICE_HISTORICAL + REQUEST;
export const FETCH_COIN_PRICE_HISTORICAL_SUCCESS = FETCH_COIN_PRICE_HISTORICAL + SUCCESS;
export const FETCH_COIN_PRICE_HISTORICAL_FAILURE = FETCH_COIN_PRICE_HISTORICAL + FAILURE;


export function fetchCoinPriceHistorical(fromSymbol, toSymbol, historicalFormat) {
  return axiosFetch(FETCH_COIN_PRICE_HISTORICAL, `${COIN_PRICE_HISTORICAL_URL}${historicalFormat.histoType}?fsym=${fromSymbol}&tsym=${toSymbol}&limit=${historicalFormat.limit}&aggregate=${historicalFormat.aggregate}`);
}

export function fetchCoinPrice(fromSymbol, toSymbol) {
  return axiosFetch(FETCH_COIN_PRICE, `${COIN_PRICE_URL}?fsyms=${fromSymbol}&tsyms=${toSymbol}`);
}
