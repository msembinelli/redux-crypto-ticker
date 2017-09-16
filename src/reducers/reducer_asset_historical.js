import { FETCH_ASSET_HISTORICAL } from '../actions/fetch_asset_historical';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ASSET_HISTORICAL:
      return [ action.payload.data, ...state ];
  }
  return state;
}
