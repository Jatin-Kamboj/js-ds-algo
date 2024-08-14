class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  remove(index) {
    const itemToRemove = this.data[index];
    // Shifting all the other items index 
    this.shiftItems(index);
    return itemToRemove;
  }

  shiftItems(index) {
    for (let i = index; i <= this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    return this.data;
  }
}

const myData = new MyArray();
myData.push("zero");
myData.push("one");
myData.push("two");
myData.push("three");
myData.push("four");
myData.push("five");
console.log("original: myData :>> ", myData);

// myData.pop();
// console.log("popped: myData :>> ", myData);

myData.remove(1);
console.log("removed: myData :>> ", myData);
