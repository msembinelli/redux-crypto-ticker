import { FETCH_BLOCK_HASH } from '../actions/fetch_block_hash';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_BLOCK_HASH:
      return action.payload.data.hash;
  }
  return state;
}
