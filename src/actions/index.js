import axios from 'axios';

const ROOT_URL = 'https://api.coinmarketcap.com/v1/ticker/';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const FETCH_ASSET = 'FETCH_ASSET';

export function fetchAsset(asset) {
 const url = `${PROXY_URL}${ROOT_URL}${asset}`; // TODO: currency selection with /?convert=CAD
 const request = axios.get(url);
 console.log(request);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}
