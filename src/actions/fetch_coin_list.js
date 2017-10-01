import { axiosFetch, PROXY_URL, REQUEST, SUCCESS, FAILURE } from './api_utils';
import { fetchCoinName } from './fetch_coin_name';

const COIN_LIST_URL = 'https://www.cryptocompare.com/api/data/coinlist/';
export const FETCH_COIN_LIST = 'FETCH_COIN_LIST_';
export const FETCH_COIN_LIST_REQUEST = FETCH_COIN_LIST + REQUEST;
export const FETCH_COIN_LIST_SUCCESS = FETCH_COIN_LIST + SUCCESS;
export const FETCH_COIN_LIST_FAILURE = FETCH_COIN_LIST + FAILURE;

export function fetchCoinList() {
  return axiosFetch(FETCH_COIN_LIST, `${PROXY_URL}${COIN_LIST_URL}`);
}

export function fetchCoinListAndName(symbol) {
  return (dispatch, getState) => {
    return dispatch(fetchCoinList()).then(() => {
      return dispatch(fetchCoinName(symbol))
    })
  }
}
