export const createAction = (type, payload) => {
  return { type, payload };
}

export const createSimpleAction = type => createAction(type, null);