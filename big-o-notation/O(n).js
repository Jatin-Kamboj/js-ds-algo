const data = new Array(100).fill("Jatin");

const userName = "Jatin";

// Big O(n) linear time complexity
function findName(data) {
  const itemsCount = data.length - 1;
  
  for (let i = 0; i <= itemsCount; i++) {
    if (userName === data[i]) {
      console.log("Hey, I found Jatin");
    }
    console.log("i :>> ", i);
  }
}

// findName(data);

function testAlgo() {
  for (let i = 99; i >= 0; i--) {
    console.log("i :>> ", i);
  }
}
// testAlgo();

// for (let i = 0; i <= 99; i++) {
//   console.log('i :>> ', i);
// }

// Linear time complexity
for (let i = 99; i >= 0; i--) {
  console.log("i :>> ", i);
}
