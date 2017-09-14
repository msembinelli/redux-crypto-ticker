import { combineReducers } from 'redux';
import AssetReducer from './reducer_asset';

const rootReducer = combineReducers({
    asset: AssetReducer
  });

export default rootReducer;
