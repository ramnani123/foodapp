import { combineReducers } from 'redux';
import { LoginReducers } from './LoginReducer';


export function rootReducer() {
 return combineReducers( {
    LoginReducers,
  });
} 