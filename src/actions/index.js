import { createAction, createSimpleAction } from './actionCreator';

export const SET_MENU_OPENED = "SET_MENU_OPENED";
export const TOGGLE_MENU_OPENED = "TOGGLE_MENU_OPENED";

// export const setMenuOpened = state => ({
//   type: SET_MENU_OPENED,
//   payload: state
// });

// export const toggleMenuOpened = () => ({
//   type: TOGGLE_MENU_OPENED,
//   payload: {}
// });

export const setMenuOpened = state => createAction(SET_MENU_OPENED, state);
export const toggleMenuOpened = () => createSimpleAction(TOGGLE_MENU_OPENED);

// or another way
// export const toggleMenuOpened = () => createAction(TOGGLE_MENU_OPENED);
// works exactly the same as example above
