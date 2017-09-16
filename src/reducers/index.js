import { combineReducers } from 'redux';
import AssetReducer from './reducer_asset';
import AssetHistoricalReducer from './reducer_asset_historical';

const rootReducer = combineReducers({
    asset: AssetReducer,
    asset_historical: AssetHistoricalReducer
  });

export default rootReducer;
