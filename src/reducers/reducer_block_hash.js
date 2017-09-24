import { FETCH_BLOCK_HASH } from '../actions/fetch_block_hash';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_BLOCK_HASH.SUCCESS:
      return action.payload.data.hash;
    default:
      return state;
  }
}
