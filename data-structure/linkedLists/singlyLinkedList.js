/**
 * What is linked list
 * It is a collection of nodes
 * Each node consist of 2 properties such as value and next (reference to the next node)
 *
 * There are 2 types of linked lists
 * Singly Linked list
 * Doubly Linked List
 */

class SinglyLinkedList {
  tail = null;
  head = null;
  length = 0;

  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.#incrementLength();
  }

  #incrementLength() {
    this.length++;
  }

  add(value) {
    const newNode = {
      value,
      next: null,
    };

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

    while (node !== null) {
      data.push(node.value);
      node = node?.next;
    }

    return data;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };

    this.head = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    // Current node index
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insert(index, value) {
    // 10, 1
    // find current element at index
    // Create a new node
    // change the pointer at that place

    // THis is a new node
    const newNode = {
      value,
      next: null,
    };

    if (index === 0) {
      this.prepend(value);
      return this.values();
    }

    // let currentIndex = 0;
    // let currentNode = this.head;

    /**
     * This is the better way to insert a new item at an index
     * Other nodes will be moved accordingly
     */

    // 2 - 1 = 1 Leader one
    // 2 Current Node
    //
    const leaderNode = this.traverseToIndex(index - 1);
    const currentNode = this.traverseToIndex(index);
    newNode.next = currentNode;
    leaderNode.next = newNode;

    this.#incrementLength();

    // Finding existing node at the index
    // while (currentNode.next) {
    //   if (currentIndex === index) {
    //     newNode.next = currentNode;
    //     leaderNode.next = newNode;

    //     break;
    //   }

    //   currentNode = currentNode.next;
    //   currentIndex++;
    // }

    return this.values();
  }

  remove(index) {
    // 2
    const leaderNode = this.traverseToIndex(index - 1);

    const removalNode = this.traverseToIndex(index);

    leaderNode.next = removalNode.next;
    this.length--;

    return this.values();
  }

  // Implement this
  reverse() {
    if (!this.head) return this.values();

    return this;
  }
}

const linkedList = new SinglyLinkedList(10);
linkedList.add(5);
linkedList.add(16);
linkedList.prepend(100);

// After reversing
linkedList.printValues();
linkedList.reverse();
linkedList.printValues();
