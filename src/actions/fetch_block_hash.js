import axios from 'axios';

const ROOT_URL = 'https://blockchain.info/latestblock';
const PROXY_URL = 'http://localhost:8081/'; // TODO: Deploy to separate server
export const FETCH_BLOCK_HASH = 'FETCH_BLOCK_HASH';

export function fetchBlockHash() {
 const url = `${PROXY_URL}${ROOT_URL}`;
 const request = axios.get(url);
 // console.log(request);

  return {
    type: FETCH_BLOCK_HASH,
    payload: request
  };
}
