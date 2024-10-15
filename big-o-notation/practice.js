const values = new Array(100).fill(1);

function printMiddleNumbers() {
  const arrayLength = values.length ;
  const length = arrayLength / 2;

  for (let i = length; i <= arrayLength; i++) {
    console.log("i :>> ", i, values[i]);
  }
}

printMiddleNumbers()