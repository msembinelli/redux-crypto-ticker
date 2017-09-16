import axios from 'axios';

const ROOT_URL = 'https://min-api.cryptocompare.com/data/histo';
export const FETCH_ASSET_HISTORICAL = 'FETCH_ASSET_HISTORICAL';

export const HISTO_TYPE = {
  MINUTE: 'minute',
  HOUR: 'hour',
  DAY: 'day'
}

export function fetchAssetHistorical(histoType, fromSymbol, toSymbol, limit, aggregate) {
 const url = `${ROOT_URL}${histoType}?fsym=${fromSymbol}&tsym=${toSymbol}&limit=${limit}&aggregate=${aggregate}`; // TODO: currency selection with /?convert=CAD
 const request = axios.get(url);
 console.log(request);

  return {
    type: FETCH_ASSET_HISTORICAL,
    payload: request
  };
}
