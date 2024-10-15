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
}

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");

// console.log(myHashTable.get("grapes"))
// console.log(myHashTable.get("apples"))