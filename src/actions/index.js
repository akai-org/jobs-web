import { createAction, createSimpleAction } from './actionCreator';

export const SET_MENU_OPENED = "SET_MENU_OPENED";
export const TOGGLE_MENU_OPENED = "TOGGLE_MENU_OPENED";

export const setMenuOpened = state => createAction(SET_MENU_OPENED, state);
export const toggleMenuOpened = () => createSimpleAction(TOGGLE_MENU_OPENED);
