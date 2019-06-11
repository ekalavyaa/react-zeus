import { combineReducers } from 'redux';
import loginReducer from './modules/login/login.reducer';

export default combineReducers({
  user: loginReducer
});
