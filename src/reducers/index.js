import { combineReducers } from 'redux';
import CoinListReducer from './reducer_coin_list';
import CoinHistoricalReducer from './reducer_coin_historical';
import CoinPriceReducer from './reducer_coin_price';
import CoinNameReducer from './reducer_coin_name';
import BlockHashReducer from './reducer_block_hash';
import CurrencySymbolReducer from './reducer_currency_symbol';

const rootReducer = combineReducers({
    coinName: CoinNameReducer,
    coinList: CoinListReducer,
    coinHistorical: CoinHistoricalReducer,
    coinPrice: CoinPriceReducer,
    blockHash: BlockHashReducer,
    currencySymbol: CurrencySymbolReducer,
  });

export default rootReducer;
