import axios from 'axios';

const ROOT_URL = 'https://min-api.cryptocompare.com/data/histo';

export const FETCH_COIN_HISTORICAL = {
  SUCCESS: 'FETCH_COIN_HISTORICAL_SUCCESS',
  FAIL:    'FETCH_COIN_HISTORICAL_FAIL'
};

// TODO adjust sample limit and aggregation for each format.
export const HISTORICAL_FORMATS = {
  ONE_HOUR:    {'histoType': 'minute', 'sampleLimit': 60,   'sampleStep': 1},
  ONE_DAY:     {'histoType': 'hour',   'sampleLimit': 24,   'sampleStep': 1},
  ONE_WEEK:    {'histoType': 'hour',   'sampleLimit': 168,  'sampleStep': 1},
  ONE_MONTH:   {'histoType': 'day',    'sampleLimit': 30,   'sampleStep': 1},
  THREE_MONTH: {'histoType': 'day',    'sampleLimit': 90,   'sampleStep': 1},
  SIX_MONTH:   {'histoType': 'day',    'sampleLimit': 182,  'sampleStep': 1},
  ONE_YEAR:    {'histoType': 'day',    'sampleLimit': 365,  'sampleStep': 1},
  FIVE_YEAR:   {'histoType': 'day',    'sampleLimit': 1825, 'sampleStep': 1},
}

export function fetchCoinHistorical(fromSymbol, toSymbol, format) {
 var actionType = FETCH_COIN_HISTORICAL.SUCCESS;
 const url = `${ROOT_URL}${format.histoType}?fsym=${fromSymbol}&tsym=${toSymbol}&limit=${format.sampleLimit}&aggregate=${format.sampleStep}`;
 const request = axios.get(url).catch(actionType = FETCH_COIN_HISTORICAL.FAIL);

  return {
    type: actionType,
    payload: request
  };
}
