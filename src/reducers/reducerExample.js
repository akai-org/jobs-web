import { ACTION_EXAMPLE } from "../actions";

const reducerExample = (state = [], action) => {
  switch (action.type) {
    case ACTION_EXAMPLE:
      return [...state];
    default:
      return state;
  }
};

export default reducerExample;
