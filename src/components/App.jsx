import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import c from "./../constants";
import Block from "./block";
import { makeMove } from "../actions";

class App extends React.Component {
  clickBoard(x, y) {
    if (this.checkWinner() !== true) {
      const { dispatch } = this.props;
      dispatch(makeMove(x, y));
    }
    if (this.checkWinner()) {
      if (this.props.turn === true) {
        let playAgain = confirm("X has won! Start new game?");
        if (playAgain) {
          location.reload();
        } else {
          alert("well fuck you, restarting anyway");
          location.reload();
        }
      } else {
        let playAgain = confirm("O has won! Start new game?");
        if (playAgain) {
          location.reload();
        } else {
          alert("well fuck you, restarting anyway");
          location.reload();
        }
      }
    }
  }

  checkWinner() {
    if (
      this.props.ticTacArray[0][0] === this.props.ticTacArray[1][0] &&
      this.props.ticTacArray[0][0] === this.props.ticTacArray[2][0] &&
      this.props.ticTacArray[0][0] !== "empty"
    ) {
      return true;
    } else if (
      this.props.ticTacArray[0][1] === this.props.ticTacArray[1][1] &&
      this.props.ticTacArray[0][1] === this.props.ticTacArray[2][1] &&
      this.props.ticTacArray[0][1] !== "empty"
    ) {
      return true;
    } else if (
      this.props.ticTacArray[0][2] === this.props.ticTacArray[1][2] &&
      this.props.ticTacArray[0][2] === this.props.ticTacArray[2][2] &&
      this.props.ticTacArray[0][2] !== "empty"
    ) {
      return true;
    } else if (
      this.props.ticTacArray[0][0] === this.props.ticTacArray[0][1] &&
      this.props.ticTacArray[0][0] === this.props.ticTacArray[0][2] &&
      this.props.ticTacArray[0][0] !== "empty"
    ) {
      return true;
    } else if (
      this.props.ticTacArray[1][0] === this.props.ticTacArray[1][1] &&
      this.props.ticTacArray[1][0] === this.props.ticTacArray[1][2] &&
      this.props.ticTacArray[1][0] !== "empty"
    ) {
      return true;
    } else if (
      this.props.ticTacArray[2][0] === this.props.ticTacArray[2][1] &&
      this.props.ticTacArray[2][0] === this.props.ticTacArray[2][2] &&
      this.props.ticTacArray[2][0] !== "empty"
    ) {
      return true;
    } else if (
      this.props.ticTacArray[0][0] === this.props.ticTacArray[1][1] &&
      this.props.ticTacArray[0][0] === this.props.ticTacArray[2][2] &&
      this.props.ticTacArray[0][0] !== "empty"
    ) {
      return true;
    } else if (
      this.props.ticTacArray[2][0] === this.props.ticTacArray[1][1] &&
      this.props.ticTacArray[2][0] === this.props.ticTacArray[0][2] &&
      this.props.ticTacArray[2][0] !== "empty"
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <style jsx global>{`
          body {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
          }
        `}</style>
        <style jsx>
          {`
            table,
            td {
              border: 1px solid black;
            }

            table {
              border-collapse: collapse;
              height: 90vh;
              width: 90vw;
            }

            td {
              height: 300px;
              width: 300px;
              font-size: 24px;
              text-align: center;
            }
          `}
        </style>
        <table>
          <tbody>
            <tr>
              <td onClick={() => this.clickBoard(0, 0)}>
                <Block value={this.props.ticTacArray[0][0]} />
              </td>
              <td onClick={() => this.clickBoard(1, 0)}>
                <Block value={this.props.ticTacArray[1][0]} />
              </td>
              <td onClick={() => this.clickBoard(2, 0)}>
                <Block value={this.props.ticTacArray[2][0]} />
              </td>
            </tr>
            <tr>
              <td onClick={() => this.clickBoard(0, 1)}>
                <Block value={this.props.ticTacArray[0][1]} />
              </td>
              <td onClick={() => this.clickBoard(1, 1)}>
                <Block value={this.props.ticTacArray[1][1]} />
              </td>
              <td onClick={() => this.clickBoard(2, 1)}>
                <Block value={this.props.ticTacArray[2][1]} />
              </td>
            </tr>
            <tr>
              <td onClick={() => this.clickBoard(0, 2)}>
                <Block value={this.props.ticTacArray[0][2]} />
              </td>
              <td onClick={() => this.clickBoard(1, 2)}>
                <Block value={this.props.ticTacArray[1][2]} />
              </td>
              <td onClick={() => this.clickBoard(2, 2)}>
                <Block value={this.props.ticTacArray[2][2]} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ticTacArray: state.board,
    turn: state.turn
  };
};

App.propTypes = {
  ticTacArray: PropTypes.array,
  turn: PropTypes.bool
};

export default connect(mapStateToProps)(App);
