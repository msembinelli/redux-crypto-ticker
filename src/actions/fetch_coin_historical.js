import { axiosFetch, REQUEST, SUCCESS, FAILURE } from './api_utils';

const COIN_HISTORICAL_URL = 'https://min-api.cryptocompare.com/data/histo';
export const FETCH_COIN_HISTORICAL = 'FETCH_COIN_HISTORICAL_';
export const FETCH_COIN_HISTORICAL_REQUEST = FETCH_COIN_HISTORICAL + REQUEST;
export const FETCH_COIN_HISTORICAL_SUCCESS = FETCH_COIN_HISTORICAL + SUCCESS;
export const FETCH_COIN_HISTORICAL_FAILURE = FETCH_COIN_HISTORICAL + FAILURE;

export const HISTO_TYPE = {
  MINUTE: 'minute',
  HOUR: 'hour',
  DAY: 'day'
}

export function fetchCoinHistorical(histoType, fromSymbol, toSymbol, limit, aggregate) {
  return axiosFetch(FETCH_COIN_HISTORICAL, `${COIN_HISTORICAL_URL}${histoType}?fsym=${fromSymbol}&tsym=${toSymbol}&limit=${limit}&aggregate=${aggregate}`);
}
