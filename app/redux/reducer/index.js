import {combineReducers} from 'redux';
import * as mainReducer from './reducer1';

const appReducer = combineReducers({
  ...mainReducer,
  //...OtherReducers,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
