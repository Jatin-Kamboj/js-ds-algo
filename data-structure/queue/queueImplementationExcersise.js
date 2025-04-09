class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Return first element
  peek() {
    return this.first;
  }

  // A new element is added at the last position
  // First come first service
  // Ticketing system DONE
  enqueue(value) {
    /**
     * Plan to queue a new element
     * Create a node
     * length === 0
     *  this.top = newNode
     *  this.bottom = newNode
     *
     * this.bottom.next = newNOde
     * this.bottom = newNode
     * length ++
     */

    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  // Remove the first from the QUEUE
  dequeue() {
    if (!this.first) return null;

    /**
     * Plan
     * this.first  = this.first.next
     */

    if (this.length == 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;
  }
}

const myQueue = new Queue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
console.log("myQueue :>> ", myQueue);

myQueue.dequeue();
console.log("myQueue :>> ", myQueue);
