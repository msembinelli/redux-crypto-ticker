import { FETCH_BLOCK_HASH_SUCCESS, FETCH_BLOCK_HASH_REQUEST, FETCH_BLOCK_HASH_FAILURE } from '../actions/fetch_block_hash_and_info';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_BLOCK_HASH_REQUEST:
      return state;

    case FETCH_BLOCK_HASH_SUCCESS:
      return action.payload.data.hash;

    case FETCH_BLOCK_HASH_FAILURE:
      return state;
  }
  return state;
}
