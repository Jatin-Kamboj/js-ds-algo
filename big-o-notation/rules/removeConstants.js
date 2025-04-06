const items = new Array(100).fill(10);

function printHiAndSayHalfElements(input) {
  console.log("Hi");

  let index = 0;
  const middleIndex = Math.floor(input.length / 2); // O(1)

  while (index <= middleIndex) {
    //O(1)
    index++;
    console.log("item :>> ", index);
  }

  // for (let i = 0; i <= middleIndex; i++) {
  //   console.log("item :>> ", i);
  // }

  // Constant looping operation which will be static here as 100 always irespective of the input
  for (let i = 0; i <= 100; i++) {
    console.log("Hi", i);
  }
}

printHiAndSayHalfElements(items);
