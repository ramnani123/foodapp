import { combineReducers } from 'redux';
import { LoginReducers } from './LoginReducer';
import  sceneReducer  from './ScreenReducer';
import { ItemsReducer } from './itemsReducer';

export function rootReducer() {
  return combineReducers({
    LoginReducers,
    sceneReducer,
    ItemsReducer,
  });
}