import { combineReducers } from 'redux';
import CoinListReducer from './reducer_coin_list';
import CoinHistoricalReducer from './reducer_coin_historical';
import CoinPriceReducer from './reducer_coin_price';

const rootReducer = combineReducers({
    coinList: CoinListReducer,
    coinHistorical: CoinHistoricalReducer,
    coinPrice: CoinPriceReducer,
  });

export default rootReducer;
