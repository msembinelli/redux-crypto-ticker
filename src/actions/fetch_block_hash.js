import axios from 'axios';

const ROOT_URL = 'https://blockchain.info/latestblock';
export const FETCH_BLOCK_HASH= 'FETCH_BLOCK_HASH';

export function fetchBlockHash() {
 const url = `${ROOT_URL}`;
 const request = axios.get(url);
 // console.log(request);

  return {
    type: FETCH_BLOCK_HASH,
    payload: request
  };
}
