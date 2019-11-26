
  const moves = {
    left: function shiftLeft(boardArr) {
      boardArr.forEach(function(arr, idx) {
        boardArr[idx] = leftMove(arr);
        return boardArr[idx];
      });
      return boardArr;
    },
    right: function shiftRight(boardArr) {
      boardArr.forEach(function(arr, idx) {
        boardArr[idx] = rightMove(arr);
        return boardArr[idx];
      });
      return boardArr;
    },
    up: function shiftUp(boardArr) {
      boardArr = colConverter(boardArr);
      boardArr.forEach(function(arr, idx) {
        boardArr[idx] = leftMove(arr);
        return boardArr[idx];
      });
      boardArr = colConverter(boardArr);
      return boardArr;
    },
    down: function shiftDown(boardArr) {
      boardArr = colConverter(boardArr);
      boardArr.forEach(function(arr, idx) {
        boardArr[idx] = rightMove(arr);
        return boardArr[idx];
      });
      boardArr = colConverter(boardArr);
      return boardArr;
    }
  };


  export default board