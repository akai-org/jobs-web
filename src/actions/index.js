export const SET_MENU_OPENED = "SET_MENU_OPENED";
export const TOGGLE_MENU_OPENED = "TOGGLE_MENU_OPENED";

export const setMenuOpened = state => ({
  type: SET_MENU_OPENED,
  payload: state
});

export const toggleMenuOpened = () => ({
  type: TOGGLE_MENU_OPENED,
  payload: {}
});
