import { SET_HISTORICAL_FORMAT, HISTO_TYPE } from '../actions/set_historical_format';

const initialFormat = {
  histoType: HISTO_TYPE.DAY,
  limit: '900',
  aggregate: '1'
}

export default function(state = initialFormat, action) {
  switch(action.type) {
    case SET_HISTORICAL_FORMAT:
      return action.payload;
  }
  return state;
}
