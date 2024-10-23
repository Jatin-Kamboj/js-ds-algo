class SinglyLinkedList {
  tail = null;
  head = null;

  constructor(value) {
    this.head = {
      value,
      next: null,
    };
  }

  add(value) {
    if (this.head && !this.tail) {
      this.tail = {
        value,
        next: null,
      };

      this.head.next = this.tail;
    } else {
      console.log("this.tail :>> ", this.tail);
      this.tail.next = {
        value,
        next: null,
      };
    }
  }

  values() {
    const data = [];
    let node = this.head;

    if (node.value) data.push(node.value);
    do {
      node = node.next;
      data.push(node.value);
    } while (node.next);

    return data;
  }
}

const linkedList = new SinglyLinkedList(10);
linkedList.add(5);
linkedList.add(16);
linkedList.values();

console.log("linkedList.head :>> ", linkedList.tail);
