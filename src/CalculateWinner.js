class CalculateWinner {
  byRow(squares, row, col) {
    var counter = 1;
    var end_loop = false
    var i = 1
    while(!end_loop) {
      if(squares[row][col] == squares[row][col-i]) {
        counter += 1;
        i += 1;
      } else {
        end_loop = true;
      }
      if(counter == 5) return squares[row][col];
    }
    end_loop = false;
    while(!end_loop) {
      if(squares[row][col] == squares[row][col+i]) {
        counter += 1;
        i += 1;
      } else {
        end_loop = true;
      }
      if(counter == 5) return squares[row][col];
    }
    return null
  }

  byCol(squares, row, col) {
    var counter = 1;
    var end_loop = false
    var i = 1
    while(!end_loop) {
      if((row - i >= 0) && (squares[row][col] == squares[row-i][col])) {
        counter += 1;
        i += 1;
      } else {
        end_loop = true;
      }
      if(counter == 5) return squares[row][col];
    }
    end_loop = false;
    while(!end_loop) {
      if((row + i < squares.length) && (squares[row][col] == squares[row+i][col])) {
        counter += 1;
        i += 1;
      } else {
        end_loop = true;
      }
      if(counter == 5) return squares[row][col];
    }
    return null
  }

  bySlashLR(squares, row, col) {
    var counter = 1;
    var end_loop = false
    var i = 1
    while(!end_loop) {
      if((row - i >= 0) && (squares[row][col] == squares[row-i][col-i])) {
        counter += 1;
        i += 1;
      } else {
        end_loop = true;
      }
      if(counter == 5) return squares[row][col];
    }
    end_loop = false;
    while(!end_loop) {
      if((row + i < squares.length) && (squares[row][col] == squares[row+i][col+i])) {
        counter += 1;
        i += 1;
      } else {
        end_loop = true;
      }
      if(counter == 5) return squares[row][col];
    }
    return null
  }

  bySlashRL(squares, row, col) {
    var counter = 1;
    var end_loop = false
    var i = 1
    while(!end_loop) {
      if((row - i >= 0) && (squares[row][col] == squares[row-i][col+i])) {
        counter += 1;
        i += 1;
      } else {
        end_loop = true;
      }
      if(counter == 5) return squares[row][col];
    }
    end_loop = false;
    while(!end_loop) {
      if((row + i < squares.length) && (squares[row][col] == squares[row+i][col-i])) {
        counter += 1;
        i += 1;
      } else {
        end_loop = true;
      }
      if(counter == 5) return squares[row][col];
    }
    return null
  }
}

export default CalculateWinner;
