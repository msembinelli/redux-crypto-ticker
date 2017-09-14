import { FETCH_ASSET } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ASSET:
      // return state.concat([ action.payload.data ]);
      return [ action.payload.data, ...state ];
  }
  return state;
}
