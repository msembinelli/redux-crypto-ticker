import { FETCH_ASSET } from '../actions/fetch_asset';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ASSET:
      // return state.concat([ action.payload.data ]);
      return [ action.payload.data, ...state ];
  }
  return state;
}
