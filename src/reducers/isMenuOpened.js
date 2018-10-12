import { SET_MENU_OPENED } from "../actions";

const isMenuOpened = (state = false, action) => {
  switch (action.type) {
    case SET_MENU_OPENED:
      return action.payload;
    default:
      return state;
  }
};

export default isMenuOpened;
