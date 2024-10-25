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

  values() {
    const data = [];
    let node = this.head;

    if (node.value) data.push(node.value);
    while (node.next !== null) {
      node = node.next;
      data.push(node.value);
    }
    console.log("data :>> ", data);
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
      newNode.next = this.head;

      // this.head.value = newNode
      this.head = newNode;
      return this.values();
    }

    let currentIndex = 0;
    let currentNode = this.head;
    let lastNode = this.tail;

    // Finding existing node at the index
    while (currentNode.next) {
      if (currentIndex === index) {
        newNode.next = currentNode;
        lastNode.next = newNode;

        break;
      }

      lastNode = currentNode;
      currentNode = currentNode.next;

      currentIndex++;
    }

    return this.values();
  }
}

const linkedList = new SinglyLinkedList(10);
linkedList.add(5);
linkedList.add(16);
linkedList.prepend(100);
linkedList.values();
linkedList.insert(0, 1000);
linkedList.insert(1, 200);
linkedList.insert(2, 300);

// console.log("Length => ", linkedList.length);
// console.log("linkedList :>> ", linkedList.length);
