import { combineReducers } from 'redux';
import { name as intName, reducer as intReducer } from './../interval';

export default combineReducers({
  [intName]: intReducer
});
