import axios from 'axios';

const PROXY_URL = 'http://localhost:8081/'; // TODO: Deploy to separate server

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const LATEST_BLOCK_URL = 'https://blockchain.info/latestblock';
export const FETCH_BLOCK_HASH = 'FETCH_BLOCK_HASH_';
export const FETCH_BLOCK_HASH_REQUEST = FETCH_BLOCK_HASH + REQUEST;
export const FETCH_BLOCK_HASH_SUCCESS = FETCH_BLOCK_HASH + SUCCESS;
export const FETCH_BLOCK_HASH_FAILURE = FETCH_BLOCK_HASH + FAILURE;

const RAW_BLOCK_URL = 'https://blockchain.info/rawblock/';
export const FETCH_BLOCK_INFO = 'FETCH_BLOCK_INFO_';
export const FETCH_BLOCK_INFO_REQUEST = FETCH_BLOCK_INFO + REQUEST;
export const FETCH_BLOCK_INFO_SUCCESS = FETCH_BLOCK_INFO + SUCCESS;
export const FETCH_BLOCK_INFO_FAILURE = FETCH_BLOCK_INFO + FAILURE;

function axiosFetch(type, url) {
    return dispatch => {
    // Reducers may handle this to set a flag like isFetching
    dispatch({ type: type + REQUEST, payload: url })

    // Perform the actual API call
    return axios.get(url).then(
      response => {
        // Reducers may handle this to show the data and reset isFetching
        dispatch({ type: type + SUCCESS,  payload: response })
      },
      error => {
        // Reducers may handle this to reset isFetching
        dispatch({ type: type + FAILURE,  error: response.error })
        // Rethrow so returned Promise is rejected
        throw error
      }
    )
  }
}

export function fetchBlockHash() {
  return axiosFetch(FETCH_BLOCK_HASH, `${PROXY_URL}${LATEST_BLOCK_URL}`);
}

export function fetchBlockInfo(hash) {
  return axiosFetch(FETCH_BLOCK_INFO, `${PROXY_URL}${RAW_BLOCK_URL}${hash}`);
}

export function fetchBlockHashAndInfo() {
  return (dispatch, getState) => {
    return dispatch(fetchBlockHash()).then(() => {
      return dispatch(fetchBlockInfo(getState().blockHash))
    })
  }
}
