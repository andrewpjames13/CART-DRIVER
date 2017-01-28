/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import MenuItemsReducer from './reducer_menus';
import PressItemsReducer from './reducer_press';

const rootReducer = combineReducers({
  menuItems: MenuItemsReducer,
  pressItems: PressItemsReducer
});

export default rootReducer;
