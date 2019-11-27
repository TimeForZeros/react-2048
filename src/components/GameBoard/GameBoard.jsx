import React, { Component } from "react";
import "./GameBoard.css";
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


function randomNum() {
 return Math.floor(Math.random() * 4);
}


  //   //step 1. returns array of nonzeros
  function reduceArr(arr) {
    function nonZeroFind(nonZero) {
      return nonZero > 0;
    }
    return arr.filter(nonZeroFind);
  }
  
//   //step 2. combines like values
  function combineNums(arr) {
    arr.forEach(function(num, idx) {
      if (arr[idx + 1] == arr[idx]) {
        arr[idx] *= 2;
        this.state.score += arr[idx];
        // scoreDisplay.textContent = score;
        arr.splice(idx + 1, 1);
        return arr[idx];
      } else {
        return;
      }
    });
  
    return arr;
  }
  
//   //step 3. returns an array with a length of 4
  function fillArr(arr) {
    for (arr.length; arr.length < 4; ) {
      arr.push(0);
    }
    return arr;
  }
  
  //alt step (right shift)
  function rightMove(arr) {
    var flip = fillArr(combineNums(reduceArr(arr.reverse())));
    return flip.reverse();
  }
  
  //Moves
  function leftMove(arr) {
    return fillArr(combineNums(reduceArr(arr)));
  }
  
//   //updated Col Converter
  
  function colConverter(arr) {
    var transposedArr = [[0, 0, 0, 0],
                         [0, 0, 0, 0], 
                         [0, 0, 0, 0], 
                         [0, 0, 0, 0]];
    arr.forEach(function(rowArr, rowIdx) {
      rowArr.forEach(function(val, colIdx) {
        transposedArr[colIdx].splice(rowIdx, 1, val);
        return transposedArr;
      });
      return transposedArr;
    });
    return transposedArr;
  }


class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board:  [ 
      [0, 0, 0, 0], //Row 1 idx 0
      [0, 0, 0, 0], //Row 2 idx 1
      [0, 0, 0, 0], //Row 3 idx 2
      [0, 0, 0, 0] //Row 4 idx 3
      ],
      score: 0,
    }
  }


  boardRender = (arr) => {
    let newArr = [];
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
              backgroundColor: `${colors[cell]}`,
              margin: "5px",
              borderRadius: '20px'
            }
          }))
      });
    });
    return newArr;
  };

  spawnInit(arr) {
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

  init() {
    this.boardRender(this.state.board);
    this.spawnInit(this.state.board);
    console.log(this.state.board);
  }

  render() {
    this.init();
    return (
      <div>
        <div className="main">
          <h2>2048 </h2>
          <section className='grid'> {this.boardRender(this.state.board)}</section>
          <div>Score: {this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default GameBoard;