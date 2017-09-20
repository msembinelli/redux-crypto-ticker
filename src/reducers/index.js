import { combineReducers } from 'redux';
import CoinListReducer from './reducer_coin_list';
import CoinHistoricalReducer from './reducer_coin_historical';
import CoinPriceReducer from './reducer_coin_price';
import CoinNameReducer from './reducer_coin_name';

const rootReducer = combineReducers({
    coinName: CoinNameReducer,
    coinList: CoinListReducer,
    coinHistorical: CoinHistoricalReducer,
    coinPrice: CoinPriceReducer,
  });

export default rootReducer;
