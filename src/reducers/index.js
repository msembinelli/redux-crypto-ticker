import { combineReducers } from 'redux';
import CoinListReducer from './reducer_coin_list';
import CoinPriceReducer from './reducer_coin_price';
import CoinPriceHistoricalReducer from './reducer_coin_price_historical';
import CoinNameReducer from './reducer_coin_name';
import BlockHashReducer from './reducer_block_hash';
import BlockInfoReducer from './reducer_block_info';
import FromSymbolReducer from './reducer_from_symbol';
import ToSymbolReducer from './reducer_to_symbol';
import HistoricalFormatReducer from './reducer_historical_format';

const rootReducer = combineReducers({
    coinList: CoinListReducer,
    coinName: CoinNameReducer,
    fromSymbol: FromSymbolReducer,
    toSymbol: ToSymbolReducer,
    coinPrice: CoinPriceReducer,
    coinPriceHistorical: CoinPriceHistoricalReducer,
    historicalFormat: HistoricalFormatReducer,
    blockHash: BlockHashReducer,
    blockInfo: BlockInfoReducer,
  });

export default rootReducer;
