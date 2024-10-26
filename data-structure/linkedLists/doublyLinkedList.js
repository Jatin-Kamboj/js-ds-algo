class Node {
  prev = null;
  value = null;
  next = null;

  constructor(value) {
    this.value = value;
  }

  setNext(ref) {
    this.next = ref;
  }

  setPrev(ref) {
    this.prev = ref;
  }
}

class DoublyLinkedList {
  tail = null;
  head = null;
  length = 0;

  // Head will not have prev
  // Tail have prev
  constructor(value) {
    this.head = {
      value,
      prev: null,
      next: null,
    };

    this.tail = this.head;
    this.#incrementLength();
  }

  #incrementLength() {
    this.length++;
  }

  add(value) {
    const newNode = { value, prev: this.tail, next: null };

    this.tail.next = newNode;
    this.tail = newNode;
    this.#incrementLength();
  }

  printValues() {
    console.log(this.values());
  }

  values() {
    const data = [];
    let node = this.head;

    if (node.value) data.push(node.value);
    while (node.next !== null) {
      node = node.next;
      data.push(node.value);
    }

    return data;
  }

  prepend(value) {
    const newNode = {
      value,
      prev: null,
      next: this.head,
    };

    this.head.prev = newNode
    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    const newNode = {
      value,
      prev: null,
      next: null,
    };

    if (index === 0) {
      this.prepend(value);
      return this.values();
    }

    const currentNode = this.traverseToIndex(index);
    const leaderNode = currentNode.prev;

    newNode.next = currentNode;
    newNode.prev = leaderNode;
    leaderNode.next = newNode;

    this.#incrementLength();

    return this.values();
  }

  remove(index) {
    // const leaderNode = this.traverseToIndex(index - 1);
    const removalNode = this.traverseToIndex(index);
    const leaderNode = removalNode.prev;

    leaderNode.next = removalNode.next;
    this.length--;

    return this.values();
  }
}

const linkedList = new DoublyLinkedList(10);
linkedList.add(5);
linkedList.add(16);

linkedList.prepend(100);
// linkedList.values();
linkedList.insert(1, 1000);
// linkedList.insert(1, 200);
// linkedList.insert(2, 300);

// Remove a node
// linkedList.printValues();
// console.log("linkedList :>> ", linkedList);
linkedList.remove(1);
linkedList.printValues();
