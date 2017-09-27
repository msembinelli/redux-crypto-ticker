import { FETCH_BLOCK_INFO_SUCCESS, FETCH_BLOCK_INFO_REQUEST, FETCH_BLOCK_INFO_FAILURE } from '../actions/fetch_block_hash_and_info';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_BLOCK_INFO_REQUEST:
      return action.payload;

    case FETCH_BLOCK_INFO_SUCCESS:
      return action.payload.data;

    case FETCH_BLOCK_INFO_FAILURE:
      return state;
  }
  return state;
}
