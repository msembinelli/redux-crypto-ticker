export const SET_HISTORICAL_FORMAT = 'SET_HISTORICAL_FORMAT';

export const HISTO_TYPE = {
  MINUTE: 'minute',
  HOUR: 'hour',
  DAY: 'day'
}

export function setHistoricalFormat(format) {
  return {
    type: SET_FROM_SYMBOL,
    payload: format
  };
}
