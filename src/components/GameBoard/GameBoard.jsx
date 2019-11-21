import React, { Component } from "react";
import "./GameBoard.css";

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

let board = [
  [0, 0, 0, 0], //Row 1 idx 0
  [0, 0, 0, 0], //Row 2 idx 1
  [0, 0, 0, 0], //Row 3 idx 2
  [0, 0, 0, 0] //Row 4 idx 3
];

const boardRender = (arr) => {
    let newArr = []
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

function randomNum() {
  return Math.floor(Math.random() * 4);
}

//assigns all elements the value of 0
function renderFunction(arr) {
  //function that goes through the board array rows
  arr.forEach(function(colArr, rowIdx) {
    //function that goes through the column index of the row arrays
    colArr.forEach(function(cell, colIdx) {
      let tile = document.getElementById(`c${colIdx}r${rowIdx}`);
      // tile.style.backgroundColor = colors[cell.toString()];
    });
  });
  return arr;
}

//randomly initializes two elements with values of 2
function spawnInit(arr) {
  for (var i = 0; i < 2; ) {
    let col = randomNum();
    let row = randomNum();
    let updateNum = null;
    let tileUpdate = document.getElementById(`c${col}r${row}`);
    if (board[row][col] === 0) {
      board[row][col] = 2;
      updateNum = board[row][col];
      i++;
      // tileUpdate.style.backgroundColor = colors[updateNum.toString()];
    }
  }
  return arr;
}
const foo = (arr) => {
  for (let i = 0; i < 2; ) {
    let col = randomNum();
    let row = randomNum();
    let updateNum = null;
    let tileUpdate = React.createElement("div", {
      id: `c${col}r${row}`,
      style: {
        width: "10px",
        height: "10px",
        backgroundColor: "red",
        margin: "50px"
      }
    });
    i++;
  }
}

//Initializes the board
function init() {
  // scoreDisplay.textContent = 0;
  renderFunction(board);
  spawnInit(board);
}

class GameBoard extends Component {
  render() {
    init();
    return (
      <div>
        <div className="main">
          <h2>2048 </h2>
          <section className='grid'> {boardRender(board)}</section>
        </div>
      </div>
    );
  }
}

export default GameBoard;




const unusedGrid = (
    <section className="grid">
    <div id="c0r0"></div>
    <div id="c1r0"></div>
    <div id="c2r0"></div>
    <div id="c3r0"></div>

    <div id="c0r1"></div>
    <div id="c1r1"></div>
    <div id="c2r1"></div>
    <div id="c3r1"></div>

    <div id="c0r2"></div>
    <div id="c1r2"></div>
    <div id="c2r2"></div>
    <div id="c3r2"></div>

    <div id="c0r3"></div>
    <div id="c1r3"></div>
    <div id="c2r3"></div>
    <div id="c3r3"></div>
  </section>

)