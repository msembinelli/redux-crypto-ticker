import axios from 'axios';
const ROOT_URL = 'https://www.cryptocompare.com/api/data/coinlist/';
const PROXY_URL = 'http://localhost:8081/'; // TODO: Deploy to separate server
export const FETCH_COIN_LIST = 'FETCH_COIN_LIST';

export function fetchCoinList() {
 const url = `${PROXY_URL}${ROOT_URL}`;
 const request = axios.get(url);
 console.log(request);

  return {
    type: FETCH_COIN_LIST,
    payload: request
  };
}
