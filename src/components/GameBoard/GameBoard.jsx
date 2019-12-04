import React, { Component } from "react";
// import moves from './Moves';
import "./GameBoard.css";
import { spawn } from "child_process";
// import board from './Moves';


const colors = {
  "0": "rgb(239, 244, 250)",
  "2": "#09B5A5",
  "4": "#0994BA",
  "8": "#0A69C4",
  "16": "#0027A6",
  "32": "#0C0680",
  "64": "#200159",
  "128": "#6C2CDE",
  "256": "#A82EE8",
  "512": "#C934D1",
  "1024": "#B02371",
  "2048": "#962425"
};

let randomNum = () => {
 return Math.floor(Math.random() * 4);
}
  


  let renderUpdate = (boardUpdate) => {
    let col = randomNum();
    let row = randomNum();
    if (boardUpdate[row][col] === 0) {
      if (randomNum() > 2) {
        boardUpdate[row][col] = 4;
        // this.setState({board: boardUpdate})
      } else {
        boardUpdate[row][col] = 2;
        // this.setState({board: boardUpdate})
      }
    } 
    else {
      renderUpdate(boardUpdate);
    }
    return boardUpdate;
  }
  

  

  // //check for win
  // function winCheck(arr) {
  //   arr.forEach(function(rowArr) {
  //     rowArr.forEach(function(winNumber) {
  //       if (winNumber === 2048) {
  //         alert("YOU WIN!!!!");
  //       }
  //     });
  //   });
  // }
  
  //check for lose
  // function loseCheck(arr) {
  //   return;
  //   arr.forEach(function(rowArr) {
  //     rowArr.forEach(function(isZero) {
  //       while (isZero != 0)
  //         if (isZero === 0) {
  //           return;
  //         } else {
  //           let checkBoard = Array.from(this.state.board);
  //           let checkUp = JSON.stringify(moves.up(checkBoard));
  //           let checkDown = JSON.stringify(moves.down(checkBoard));
  //           let checkLeft = JSON.stringify(moves.left(checkBoard));
  //           let checkRight = JSON.stringify(moves.right(checkBoard));
  //           if (checkUp === checkDown && checkLeft === checkRight) {
  //             alert("You lose!");
  //           } else {
  //             return;
  //           }
  //         }
  //     });
  //   });
  // }

let spawnInit = (arr) => {
    let board = arr.slice();
    for (var i = 0; i < 2; ) {
      let col = randomNum();
      let row = randomNum();
      if (board[row][col] === 0) {
        board[row][col] = 2;
        i++;
      }
    }
  }

let initBoard = () => {
  let board =  [ 
    [0, 0, 0, 0], //Row 1 idx 0
    [0, 0, 0, 0], //Row 2 idx 1
    [0, 0, 0, 0], //Row 3 idx 2
    [0, 0, 0, 0] //Row 4 idx 3
  ];
  spawnInit(board);
  return board;
}


class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      board: initBoard(),
      score: 0,
    }
  }

  moves = {
    left: (arr) => {
      let resultArr = arr.map(elArr => {
        return this.arrayManip.fill(this.arrayManip.merge(this.arrayManip.filter(elArr)));
        }
      );
      return resultArr;
  },
    right: (arr) => {
      let resultArr = arr.map(elArr => {
        return this.arrayManip.reverse(this.arrayManip.fill(this.arrayManip.merge(this.arrayManip.reverse(this.arrayManip.filter(elArr)))));
        }
      ); 
      return resultArr;
    },
    up: (arr) => {
      let transposedArr = this.arrayManip.transpose(arr);
      let resultArr = transposedArr.map(elArr => {
        return this.arrayManip.fill(this.arrayManip.merge(this.arrayManip.filter(elArr)));
        });
        return this.arrayManip.transpose(resultArr);
    },
    down: (arr) => {
      let transposedArr = this.arrayManip.transpose(arr);
      let resultArr = transposedArr.map(elArr => {
        return this.arrayManip.reverse(this.arrayManip.fill(this.arrayManip.merge(this.arrayManip.reverse(this.arrayManip.filter(elArr)))));
        });
        return this.arrayManip.transpose(resultArr);
    }
  
  };
  arrayManip = {
  transpose: (arr) => {
    return arr[0].map((col, i) => arr.map(row => row[i]))
  },
  reverse: (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++ ) {
      newArr.unshift(arr[i]);
    }
    return newArr
  },
  filter: (arr) => {
    return arr.filter(e => e > 0);
  },
  
  merge: (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i] = 2 * arr[i];
        let score = this.state.score;
        score += arr[i];
        this.setState({score: score});
        arr.splice([i + 1], 1);
      }
    }
    return arr;
  },
  fill: (arr) => {
    while (arr.length < 4) {
      arr.push(0);
    }
    return arr
  }
  }
  
  keyDirection = {
    '37': 'left',
    '38': 'up',
    '39': 'right',
    '40': 'down'
  }


    

  boardRender = (arr) => {
    let newArr = [];
    console.log('board render' + arr);
    //function that goes through the board array rows
    arr.forEach(function(colArr, rowIdx) {
      //function that goes through the column index of the row arrays
      colArr.forEach(function(cell, colIdx) {
        newArr.push(React.createElement("div", {
            id: `c${colIdx}r${rowIdx}`,
            style: {
              display: 'block',  
              width: "90px",
              height: "90px",
              backgroundColor:`${colors[cell]}`,
              margin: "5px",
              borderRadius: '20px'
            }
          }))
      });
    });
    // this.setState({board: newArr});
    return newArr;
  };

   componentDidMount(){
    document.onkeydown = (e) => {
      let score = this.state.score;
      let changingBoard = this.state.board.slice();
            const arrayBefore = JSON.stringify(changingBoard);
            let movedBoard = this.moves[this.keyDirection[e.keyCode]](changingBoard);
            //winCheck(movedBoard)
            let check = JSON.stringify(movedBoard);
            if (arrayBefore !== check) {
              //loseCheck
              this.setState({board: renderUpdate(movedBoard)});
            }
    };
  };

  
  render() {
    
    console.log('This version of the game is dedicated to my love, the 2048 master Kendira');

    
    return (
      <div>
        <div className="main">
          <h2>2048 </h2>
                    {/* <section className='grid'> {this.boardRender(this.state.board)}</section> */}
          <section class="grid">
            <div id='c0r0' style={{backgroundColor: colors[`${this.state.board[0][0]}`]}}></div>
            <div id="c1r0" style={{backgroundColor: colors[`${this.state.board[0][1]}`]}}></div>
            <div id="c2r0" style={{backgroundColor: colors[`${this.state.board[0][2]}`]}}></div>
            <div id="c3r0" style={{backgroundColor: colors[`${this.state.board[0][3]}`]}}></div>

            <div id="c0r1" style={{backgroundColor: colors[`${this.state.board[1][0]}`]}}></div>
            <div id="c1r1" style={{backgroundColor: colors[`${this.state.board[1][1]}`]}}></div>
            <div id="c2r1" style={{backgroundColor: colors[`${this.state.board[1][2]}`]}}></div>
            <div id="c3r1" style={{backgroundColor: colors[`${this.state.board[1][3]}`]}}></div>

            <div id="c0r2" style={{backgroundColor: colors[`${this.state.board[2][0]}`]}}></div>
            <div id="c1r2" style={{backgroundColor: colors[`${this.state.board[2][1]}`]}}></div>
            <div id="c2r2" style={{backgroundColor: colors[`${this.state.board[2][2]}`]}}></div>
            <div id="c3r2" style={{backgroundColor: colors[`${this.state.board[2][3]}`]}}></div>

            <div id="c0r3" style={{backgroundColor: colors[`${this.state.board[3][0]}`]}}></div>
            <div id="c1r3" style={{backgroundColor: colors[`${this.state.board[3][1]}`]}}></div>
            <div id="c2r3" style={{backgroundColor: colors[`${this.state.board[3][2]}`]}}></div>
            <div id="c3r3" style={{backgroundColor: colors[`${this.state.board[3][3]}`]}}></div>
        </section>
          <div>Score: {this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default GameBoard;