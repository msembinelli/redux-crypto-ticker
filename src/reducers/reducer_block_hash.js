import { FETCH_BLOCK_HASH } from '../actions/fetch_block_hash_and_info';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_BLOCK_HASH.REQUEST:
      return state;

    case FETCH_BLOCK_HASH.SUCCESS:
      return action.payload.data.hash;

    case FETCH_BLOCK_HASH.FAILURE:
      return state;
  }
  return state;
}
