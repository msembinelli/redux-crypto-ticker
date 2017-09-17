import { combineReducers } from 'redux';
import CoinHistoricalReducer from './reducer_coin_historical';
import CoinPriceReducer from './reducer_coin_price';

const rootReducer = combineReducers({
    coin_historical: CoinHistoricalReducer,
    coin_price: CoinPriceReducer,
  });

export default rootReducer;
