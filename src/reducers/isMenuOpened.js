import { TOGGLE_MENU_OPENED, SET_MENU_OPENED } from "../actions";

const isMenuOpened = (state = false, action) => {
  switch (action.type) {
    case SET_MENU_OPENED:
      return action.payload;
    case TOGGLE_MENU_OPENED:
      return !state;
    default:
      return state;
  }
};

export default isMenuOpened;
