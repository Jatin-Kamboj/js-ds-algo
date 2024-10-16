class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    this.data.push([key, value]);
  }

  get(key) {
    const items = this.data.find((item) => {
      return item?.[0] === key;
    });

    return items?.[1];
  }

  keys() {
    const keysList = [];
    if (this.data.length === 0) {
      return keysList;
    }

    // O(n) Linear time complexity. Traversing all the elements in the hash
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysList.push(this.data[i][0]);
      }
    }
    return keysList;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
const hashKeys = myHashTable.keys();
console.log("hashKeys :>> ", hashKeys);

// console.log(myHashTable.get("grapes"))
// console.log(myHashTable.get("apples"))
