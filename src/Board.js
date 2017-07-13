import React, {Component} from 'react';
import Square from './Square.js'
import CalculateWinner from './CalculateWinner.js'

class Board extends Component {
  constructor(props) {
    super(props);
    let squares = new Array(15)
    for(let i=0; i<squares.length; i++) {
      squares[i] = new Array(30);
    }
    this.state = {
      squares: squares,
      xIsNext: true,
      winner: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
    this.calculateWinner = new CalculateWinner();
  }

  handleClick(row, col) {
    const squares = this.state.squares
    if((squares[row][col] == null) && (this.state.winner == null)) {
      squares[row][col] = this.state.xIsNext ? 'X' : 'O'
      this.setState({squares: squares, xIsNext: !this.state.xIsNext})
      var processWinner = this.calculateWinner.byRow(squares, row, col) ||
        this.calculateWinner.byCol(squares, row, col) ||
        this.calculateWinner.bySlashLR(squares, row, col) ||
        this.calculateWinner.bySlashRL(squares, row, col)
      if(processWinner) {
        this.setState({winner: processWinner})
      }
    }
  }

  renderSquare(row, col) {
    return <Square value={this.state.squares[row][col]} onClick={() => this.handleClick(row, col)} />;
  }

  render() {
    var squares_row = []
    let status
    if(this.state.winner) {
      status = `Winner: ${this.state.winner}`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
    }
    for(let i=0; i<15; i++) {
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
    for(let i=0; i<30; i++) {
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
