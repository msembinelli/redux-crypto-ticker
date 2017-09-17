import { combineReducers } from 'redux';
import CoinHistoricalReducer from './reducer_coin_historical';
import CoinPriceReducer from './reducer_coin_price';

const rootReducer = combineReducers({
    coinHistorical: CoinHistoricalReducer,
    coinPrice: CoinPriceReducer,
  });

export default rootReducer;
