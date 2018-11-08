export const createAction = (type, payload) => ({ type, payload });

export const createSimpleAction = type => createAction(type, null);
