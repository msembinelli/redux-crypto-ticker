export const SET_HISTORICAL_FORMAT = 'SET_HISTORICAL_FORMAT';

export const HISTO_TYPE = {
  MINUTE: 'minute',
  HOUR: 'hour',
  DAY: 'day'
}

export const CANDLE_STICK_FORMAT = {
  ONE_MINUTE:     {histoType: HISTO_TYPE.MINUTE, aggregate: 1,  limitRange: 60},    // Max 1 hour
  FIFTEEN_MINUTE: {histoType: HISTO_TYPE.MINUTE, aggregate: 15, limitRange: 96},    // Max 24 hours
  THIRTY_MINUTE:  {histoType: HISTO_TYPE.MINUTE, aggregate: 30, limitRange: 1440},  // Max 30 days (1 month)
  ONE_HOUR:       {histoType: HISTO_TYPE.HOUR,   aggregate: 1,  limitRange: 720},   // Max 90 days
  TWO_HOUR:       {histoType: HISTO_TYPE.HOUR,   aggregate: 2,  limitRange: 1440},  // Max 180 days
  ONE_DAY:        {histoType: HISTO_TYPE.DAY,    aggregate: 1,  limitRange: 365},   // Max 1 year
  ONE_WEEK:       {histoType: HISTO_TYPE.DAY,    aggregate: 7,  limitRange: 260},   // Max 5 years
  ONE_MONTH:      {histoType: HISTO_TYPE.DAY,    aggregate: 30},                    // No upper limit
}

export const NORMAL_FORMAT = {
}

export function setHistoricalFormat(format) {
  return {
    type: SET_FROM_SYMBOL,
    payload: format
  };
}
