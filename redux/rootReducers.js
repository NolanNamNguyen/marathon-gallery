import { combineReducers } from 'redux';
import commonReducer from './slices/commonSlice';
import homeReducer from './slices/homeSlice';

export default combineReducers({
  commonReducer,
  homeReducer,
});
