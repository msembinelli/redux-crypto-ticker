import axios from 'axios';

const ROOT_URL = 'https://blockchain.info/rawblock/';
export const FETCH_BLOCK_INFO = 'FETCH_BLOCK_INFO';

export function fetchBlockInfo(hash) {
 const url = `${ROOT_URL}${hash}`;
 const request = axios.get(url);
 // console.log(request);

  return {
    type: FETCH_BLOCK_INFO,
    payload: request
  };
}
