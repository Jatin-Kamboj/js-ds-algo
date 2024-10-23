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
    console.log("this.tail :>> ", this.tail);
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
    do {
      node = node.next;
      data.push(node.value);
    } while (node.next);
    console.log("data :>> ", data);
    return data;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };

    this.head = newNode;
  }
}

const linkedList = new SinglyLinkedList(10);
linkedList.add(5);
linkedList.add(16);
linkedList.prepend(100);
linkedList.values();

console.log("Length => ", linkedList.length);
console.log("linkedList.head :>> ", linkedList.tail);
