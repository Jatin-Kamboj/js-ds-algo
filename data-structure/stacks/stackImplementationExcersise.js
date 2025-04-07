class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * This is the implementation of a STACK
 * Implementation is using linked list
 * This there will be nodes and their next reference in each one of them
 * @author {Jatin Kamboj}
 */

class Stack {
  constructor() {
    // First element
    this.top = null;

    // Last element
    this.bottom = null;

    // Total number of elements
    this.length = 0;
  }

  // Return first element
  peek() {
    return this.top;
  }

  // A new element is added at the TOP first position
  push(value) {
    /**
     * Optional: Validate the value
     * Create a new node using (Node Class)
     * Case 1:  length == 0 (head = tail) DONE
     * Case 2: bottom will be updated
     *  bottom.next = newMode
     * this.bottom = newMode
     */

    const newNode = new Node(value);

    if (this.length === 0) {
      // { value:'', next: reference}
      this.top = newNode;
      this.bottom = this.top;
    } else {
      this.top.next = newNode;
      this.top = newNode;
    }

    this.length++;
  }

  // Remove last element
  // Return it back
  pop() {
    /**
     * leaderNodeIndex = this.length -1
     * Iterate and find this element
     * leaderNode.next = null
     * this.bottom = leaderNode
     */

    const lastNodeIndex = this.length - 1;
    const leaderNodeIndex = lastNodeIndex - 1;

    const lastNode = this.findNode(lastNodeIndex);
    const leaderNode = this.findNode(leaderNodeIndex);

    if (leaderNode) {
      leaderNode.next = null;
      this.bottom = leaderNode;
      this.length--;
    }

    return lastNode;
  }

  findNode(index) {
    let counter = 0;
    let currentNode = this.top;
    let matchedNode = null;

    // Iterate over all the node
    // Break where counter === index
    while (currentNode !== null) {
      if (counter === index) {
        matchedNode = currentNode;
        break;
      }

      currentNode = currentNode.next;
      counter++;
    }

    return matchedNode;
  }

  // Implementation is optional
  isEmpty() {
    if (!this.bottom && !this.bottom?.next) {
      return true;
    } else {
      return false;
    }
  }
}

const myStack = new Stack();

myStack.push("Jatin");
myStack.push("Kamboj");
myStack.push("Sanjeev");
myStack.push("Kumar");

const firstElement = myStack.peek();
// console.log("firstElement :>> ", firstElement);

console.log("myStack :>> ", myStack);

// Kamboj should be removed
const removedNode = myStack.pop();
console.log("removedNode :>> ", removedNode);

const isMyStackEmpty = myStack.isEmpty();
console.log("isMyStackEmpty :>> ", isMyStackEmpty);
