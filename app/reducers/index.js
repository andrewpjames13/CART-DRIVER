/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import MenuItemsReducer from './reducer_menus';

const rootReducer = combineReducers({
  menuItems: MenuItemsReducer
});

export default rootReducer;
