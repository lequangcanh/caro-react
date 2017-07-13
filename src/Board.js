import React, {Component} from 'react';
import Square from './Square.js'

class Board extends Component {
  constructor(props) {
    super(props);
    let squares = new Array(10)
    for(let i=0; i<squares.length; i++) {
      squares[i] = new Array(10);
    }
    this.state = {
      squares: squares,
      xIsNext: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
  }

  handleClick(row, col) {
    const squares = this.state.squares
    squares[row][col] = this.state.xIsNext ? 'X' : 'O'
    this.setState({squares: squares, xIsNext: !this.state.xIsNext})
  }

  renderSquare(row, col) {
    return <Square value={this.state.squares[row][col]} onClick={() => this.handleClick(row, col)} />;
  }

  render() {
    var squares_row = []
    const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    for(let i=0; i<10; i++) {
      squares_row.push(<BoardRow row={i} renderSquare={this.renderSquare} />)
    }

    return (
      <div>
        <div className="status">{status}</div>
        {squares_row}
      </div>
    );
  }
}

class BoardRow extends Component {
  render() {
    var squares_draw = []
    for(let i=0; i<10; i++) {
      squares_draw.push(this.props.renderSquare(this.props.row, i));
    }
    return (
      <div className="board-row">
        {squares_draw}
      </div>
    );
  }
}

export default Board;
