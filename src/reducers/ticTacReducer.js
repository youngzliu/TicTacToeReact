import constants from "./../constants";
const { initialState, types } = constants;

/*eslint-disable */

const ticTacReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MAKE_MOVE:
      if (state.board[action.x][action.y] !== "empty") {
        return state;
      }
      let newBoard = state.board.slice(0);
      let newTurn = !state.turn;
      if (state.turn === true) {
        newBoard[action.x][action.y] = "x";
      } else {
        newBoard[action.x][action.y] = "o";
      }
      return {
        board: newBoard,
        turn: newTurn
      };
    default:
      return state;
  }
};

/*eslint-enable */

export default ticTacReducer;
