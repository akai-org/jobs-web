import { createAction } from './actionCreator';

export const SET_MENU_OPENED = "SET_MENU_OPENED";

export const setMenuOpened = state => createAction(SET_MENU_OPENED, state);
