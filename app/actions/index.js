/*jshint esversion: 6 */
export function getMenuItems(menu) {
  return {
    type: 'GET_MENU_ITEMS',
    payload: menu
  };
}
