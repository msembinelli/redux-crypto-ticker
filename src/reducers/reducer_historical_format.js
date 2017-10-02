import { SET_HISTORICAL_FORMAT, HISTO_TYPE } from '../actions/set_historical_format';

const initialFormat = {
  histoType: HISTO_TYPE.HOUR,
  limit: '23',
  aggregate: '1'
}

export default function(state = initialFormat, action) {
  switch(action.type) {
    case SET_HISTORICAL_FORMAT:
      return action.payload;
  }
  return state;
}
