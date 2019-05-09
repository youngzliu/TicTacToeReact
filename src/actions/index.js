import * as types from "./../constants/ActionTypes";

export const makeMove = (x, y) => ({
  type: types.MAKE_MOVE,
  x,
  y
});
