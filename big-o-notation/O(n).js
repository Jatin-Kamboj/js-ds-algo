const data = new Array(100).fill("Jatin");

const userName = "Jatin";

// Big O(n) linear time complexity
function findName(data) {
  const itemsCount = data.length;
  for (let i = 0; i <= itemsCount; i++) {
    if (userName === data[i]) {
      console.log("Hey, I found Jatin");
    }
  }
}

findName(data);
