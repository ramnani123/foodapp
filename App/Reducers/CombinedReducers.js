import { combineReducers } from 'redux';
import { LoginReducers } from './LoginReducer';
import  sceneReducer  from './ScreenReducer';

export function rootReducer() {
  return combineReducers({
    LoginReducers,
    sceneReducer,
  });
}