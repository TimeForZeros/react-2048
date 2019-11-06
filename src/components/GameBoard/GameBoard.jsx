import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './GameBoard.css';

// const colors = {
//     "0": "rgb(239, 244, 250)",
//     "2": "#09B5A5",
//     "4": "#0994BA",
//     "8": "#0A69C4",
//     "16": "#0027A6",
//     "32": "#0C0680",
//     "64": "#200159",
//     "128": "#6C2CDE",
//     "256": "#A82EE8",
//     "512": "#C934D1",
//     "1024": "#B02371",
//     "2048": "#962425"
//   };
  
//   const moves = {
//     left: function shiftLeft(boardArr) {
//       boardArr.forEach(function(arr, idx) {
//         boardArr[idx] = leftMove(arr);
//         return boardArr[idx];
//       });
//       return boardArr;
//     },
//     right: function shiftRight(boardArr) {
//       boardArr.forEach(function(arr, idx) {
//         boardArr[idx] = rightMove(arr);
//         return boardArr[idx];
//       });
//       return boardArr;
//     },
//     up: function shiftUp(boardArr) {
//       boardArr = colConverter(boardArr);
//       boardArr.forEach(function(arr, idx) {
//         boardArr[idx] = leftMove(arr);
//         return boardArr[idx];
//       });
//       boardArr = colConverter(boardArr);
//       return boardArr;
//     },
//     down: function shiftDown(boardArr) {
//       boardArr = colConverter(boardArr);
//       boardArr.forEach(function(arr, idx) {
//         boardArr[idx] = rightMove(arr);
//         return boardArr[idx];
//       });
//       boardArr = colConverter(boardArr);
//       return boardArr;
//     }
//   };
  
//   var score = 0;
//   var board = [
//     [0, 0, 0, 0], //Row 1 idx 0
//     [0, 0, 0, 0], //Row 2 idx 1
//     [0, 0, 0, 0], //Row 3 idx 2
//     [0, 0, 0, 0] //Row 4 idx 3
//   ];
//   let scoreDisplay = document.getElementById("score");
  
//   //step 1. returns array of nonzeros
//   function reduceArr(arr) {
//     function nonZeroFind(nonZero) {
//       return nonZero > 0;
//     }
//     return arr.filter(nonZeroFind);
//   }
  
//   //step 2. combines like values
//   function combineNums(arr) {
//     arr.forEach(function(num, idx) {
//       if (arr[idx + 1] == arr[idx]) {
//         arr[idx] *= 2;
//         score += arr[idx];
//         scoreDisplay.textContent = score;
//         arr.splice(idx + 1, 1);
//         return arr[idx];
//       } else {
//         return;
//       }
//     });
  
//     return arr;
//   }
  
//   //step 3. returns an array with a length of 4
//   function fillArr(arr) {
//     for (arr.length; arr.length < 4; ) {
//       arr.push(0);
//     }
//     return arr;
//   }
  
//   //alt step (right shift)
//   function rightMove(arr) {
//     var flip = fillArr(combineNums(reduceArr(arr.reverse())));
//     return flip.reverse();
//   }
  
//   //Moves
//   function leftMove(arr) {
//     return fillArr(combineNums(reduceArr(arr)));
//   }
  
//   //updated Col Converter
  
//   function colConverter(arr) {
//     var transposedArr = [[0, 0, 0, 0],
//                          [0, 0, 0, 0], 
//                          [0, 0, 0, 0], 
//                          [0, 0, 0, 0]];
//     arr.forEach(function(rowArr, rowIdx) {
//       rowArr.forEach(function(val, colIdx) {
//         transposedArr[colIdx].splice(rowIdx, 1, val);
//         return transposedArr;
//       });
//       return transposedArr;
//     });
//     return transposedArr;
//   }
  
//   function init() {
//     scoreDisplay.textContent = 0;
//     render(board);
//     spawnInit(board);
//   }
  
//   //creating the render function
  
//   function render(arr) {
//     //function that goes through the board array rows
//     arr.forEach(function(colArr, rowIdx) {
//       //function that goes through the column index of the row arrays
//       colArr.forEach(function(cell, colIdx) {
//         let tile = document.getElementById(`c${colIdx}r${rowIdx}`);
//         tile.style.backgroundColor = colors[cell.toString()];
//       });
//     });
//     return arr;
//   }
  
//   //document.querySelector('.grid').addEventListener('click', handleClick);
  
//   function randomNum() {
//     return Math.floor(Math.random() * 4);
//   }
  
//   function renderUpdate() {
//     let col = randomNum();
//     let row = randomNum();
//     let updateNum = null;
//     let tileUpdate = document.getElementById(`c${col}r${row}`);
  
//     if (board[row][col] === 0) {

//       board[row][col];
//       if (randomNum() > 2) {
//         board[row][col] = 4;
//       } else {
//         board[row][col] = 2;
//       }
//     } else {
//       renderUpdate(board);
//     }
//     updateNum = board[row][col];
//     return (tileUpdate.style.backgroundColor = colors[updateNum.toString()]);
//   }
  
//   function spawnInit(arr) {
//     for (var i = 0; i < 2; ) {
//       let col = randomNum();
//       let row = randomNum();
//       let updateNum = null;
//       let tileUpdate = document.getElementById(`c${col}r${row}`);
//       if (board[row][col] === 0) {
//         board[row][col] = 2;
//         updateNum = board[row][col];
//         i++;
//         tileUpdate.style.backgroundColor = colors[updateNum.toString()];
//       }
//     }
//     return arr;
//   }
//   document.onkeydown = function(e) {
//     switch (e.keyCode) {
//       case 37: //left
//         {
//           const sentryArray = JSON.stringify(board);
//           let sentryCheck = "";
//           let tempArray = render(moves.left(board));
//           winCheck(tempArray);
//           sentryCheck = JSON.stringify(board);
//           board = Array.from(tempArray);
//           if (sentryArray !== sentryCheck) {
//             loseCheck(board);
//             renderUpdate(board);
//           } else return;
//         }
//         break;
//       case 38: //up
//         {
//           const sentryArray = JSON.stringify(board);
//           let sentryCheck = "";
//           let tempArray = render(moves.up(board));
//           winCheck(tempArray);
//           sentryCheck = JSON.stringify(tempArray);
//           board = Array.from(tempArray);
//           if (sentryArray !== sentryCheck) {
//             loseCheck(board);
//             renderUpdate(board);
//           } else return;
//         }
//         break;
//       case 39: //right
//         {
//           const sentryArray = JSON.stringify(board);
//           let sentryCheck = "";
//           let tempArray = render(moves.right(board));
//           winCheck(tempArray);
//           sentryCheck = JSON.stringify(tempArray);
//           board = Array.from(tempArray);
//           if (sentryArray !== sentryCheck) {
//             loseCheck(board);
//             renderUpdate(board);
//           } else return;
//         }
//         break;
//       case 40: //down
//         {
//           const sentryArray = JSON.stringify(board);
//           let sentryCheck = "";
//           let tempArray = render(moves.down(board));
//           winCheck(tempArray);
//           sentryCheck = JSON.stringify(tempArray);
//           board = Array.from(tempArray);
//           if (sentryArray !== sentryCheck) {
//             loseCheck(board);
//             renderUpdate(board);
//           } else return;
//         }
//         break;
//     }
//   };
  
//   //check for win
//   function winCheck(arr) {
//     arr.forEach(function(rowArr) {
//       rowArr.forEach(function(winNumber) {
//         if (winNumber === 2048) {
//           alert("YOU WIN!!!!");
//         }
//       });
//     });
//   }
  
//   //check for lose
//   function loseCheck(arr) {
//     return;
//     arr.forEach(function(rowArr) {
//       rowArr.forEach(function(isZero) {
//         while (isZero != 0)
//           if (isZero === 0) {
//             return;
//           } else {
//             let checkBoard = Array.from(board);
//             let checkUp = JSON.stringify(moves.up(checkBoard));
//             let checkDown = JSON.stringify(moves.down(checkBoard));
//             let checkLeft = JSON.stringify(moves.left(checkBoard));
//             let checkRight = JSON.stringify(moves.right(checkBoard));
//             if (checkUp === checkDown && checkLeft === checkRight) {
//               alert("You lose!");
//             } else {
//               return;
//             }
//           }
//       });
//     });
//   }
//   //score counter
//   init();


class GameBoard extends Component {

  
  render() {
      return (
<div>
<body>
    <section class='rules'>
        <h3>Rules</h3>
        <p id='rules'>HOW TO PLAY: Use your arrow keys to move the tiles. When two tiles of the same color touch, they merge into one!</p>
    </section>
    <div class='main'>
        <h2> 2048</h2>
        <section class="grid">
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
    </div>
    <section class='score'>
        <h3>Score</h3>
        <div class='score-container'>
            <span id='score'></span>
        </div>
        <div class="d-pad-container">
            <div class="d-pad">
                <div id="up"></div>
                <div id="right"></div>
                <div id="down"></div>
                <div id="left"></div>
            </div>
        </div>
    </section>
    <footer>
        <span></span>
        <span></span>
        <span id='copyright'>2019</span>
    </footer>
</body>
</div>







      )
  }





}


export default GameBoard;