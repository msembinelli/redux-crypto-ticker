import axios from 'axios';

const ROOT_URL = 'https://www.cryptocompare.com/api/data/coinlist/';
const PROXY_URL = 'http://localhost:8081/'; // TODO: Deploy to separate server

export const FETCH_COIN_LIST = {
  SUCCESS: 'FETCH_COIN_LIST_SUCCESS',
  FAIL:    'FETCH_COIN_LIST_FAIL'
};

export function fetchCoinList() {
  var actionType = FETCH_COIN_LIST.SUCCESS;
  const url = `${PROXY_URL}${ROOT_URL}`;
  const request = axios.get(url);
  //console.log(request);
  return {
    type: actionType,
    payload: request
  };
}
