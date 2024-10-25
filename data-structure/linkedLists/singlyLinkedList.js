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
    // console.log("this.tail :>> ", this.tail);
    const newNode = {
      value,
      next: null,
    };

    // This is important
    // Right now this next points to the previous node so we assigne next
    // to the new node
    this.tail.next = newNode;

    // Replace the nee node with the tail as the last node in the list
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
    // console.log("data :>> ", data);
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
    let counter = 0;
    let currentNode = this.head;
    // while (currentNode.next !== null) {
    while (counter !== index) {
      // if (index === counter) {
      // return currentNode;
      // }
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  /**
   *
   */
  insert(index, value) {
    // 10, 1
    // find current elememt at index
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
    // 1
    const leaderNode = this.traverseToIndex(index - 1);
    // 3
    const removalNode = this.traverseToIndex(index);
    // 2
    leaderNode.next = removalNode.next;
  }
}

const linkedList = new SinglyLinkedList(10);
linkedList.add(5);
linkedList.add(16);
linkedList.prepend(100);
// linkedList.values();
// linkedList.insert(0, 1000);
// linkedList.insert(1, 200);
// linkedList.insert(2, 300);

// Remove a node
linkedList.printValues()
linkedList.remove(1);
linkedList.printValues()

// console.log("Length => ", linkedList.length);
// console.log("linkedList :>> ", linkedList.length);
