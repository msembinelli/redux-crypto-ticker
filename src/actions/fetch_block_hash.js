import axios from 'axios';

const ROOT_URL = 'https://blockchain.info/latestblock';
const PROXY_URL = 'http://localhost:8081/'; // TODO: Deploy to separate server

export const FETCH_BLOCK_HASH = {
  SUCCESS: 'FETCH_BLOCK_HASH_SUCCESS',
  FAIL:    'FETCH_BLOCK_HASH_FAIL'
};

export function fetchBlockHash() {
  var actionType = FETCH_BLOCK_HASH.SUCCESS;
  const url = `${PROXY_URL}${ROOT_URL}`;
  const request = axios.get(url);
  // console.log(request);

  return {
    type: actionType,
    payload: request
  };
}
