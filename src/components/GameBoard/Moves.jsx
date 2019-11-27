const moves = {
  left: (arr) => {
    let resultArr = arr.map(elArr => {
      return arrayManip.fill(arrayManip.merge(arrayManip.filter(elArr)));
      }
    );
    return resultArr;
},
  right: (arr) => {
    let resultArr = arr.map(elArr => {
      return arrayManip.reverse(arrayManip.fill(arrayManip.merge(arrayManip.reverse(arrayManip.filter(elArr)))));
      }
    ); 
    return resultArr;
  },
  up: (arr) => {
    let transposedArr = arrayManip.transpose(arr);
    let resultArr = transposedArr.map(elArr => {
      return arrayManip.fill(arrayManip.merge(arrayManip.filter(elArr)));
      });
      return arrayManip.transpose(resultArr);
  },
  down: (arr) => {
    let transposedArr = arrayManip.transpose(arr);
    let resultArr = transposedArr.map(elArr => {
      return arrayManip.reverse(arrayManip.fill(arrayManip.merge(arrayManip.reverse(arrayManip.filter(elArr)))));
      });
      return arrayManip.transpose(resultArr);
  }

};
const arrayManip = {
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
      arr.splice([i + 1], 1);
    }
  }
  return arr
},
fill: (arr) => {
  while (arr.length < 4) {
    arr.push(0);
  }
  return arr
}
}

export default moves;