class myQueue {
  /**
 * Implement the MyQueue class: using two Queue
  void push(int x) Pushes element x to the back of the queue.
  int pop() Removes the element from the front of the queue and returns it.
  int peek() Returns the element at the front of the queue.
  boolean empty() Returns true if the queue is empty, false otherwise.
 */

  // Lets create 2 stacks in and out

  constructor() {
    this.stack_in = [];
    this.stack_out = [];
  }

  // New elements get in the back
  // Queue first element is processed first
  push(value) {
    this.stack_in.push(value);
  }

  // Removes the element from the front of the queue and returns it.
  // move all the elements to stack_in
  pop() {
    const stackInLength = this.stack_in.length;

    /**
      Reverse order in stack_in which will move the first element at the last
      Tricking the system
     */
    if (this.stack_out.length === 0) {
      while (this.stack_in.length > 0) {
        this.stack_out.push(this.stack_in.pop());
      }
    }

    return this.stack_out.pop();
  }

  // Returns the element at the front of the queue.
  peek() {
    if (this.stack_out.length > 0) {
      return this.stack_out[this.stack_out.length - 1];
    } else if (this.stack_in.length > 0) {
      return this.stack_in[0];
    }
    return null;
  }

  // Returns true if the queue is empty, false otherwise.
  empty() {
    return this.stack_in.length === 0 && this.stack_out.length === 0;
  }
}

const browserQueue = new myQueue();

browserQueue.push("1");
browserQueue.push("2");
browserQueue.push("3");
browserQueue.push("4");

const lastElement = browserQueue.pop();
// console.log("lastElement :>> ", lastElement);

console.log("browserQueue :>> ", browserQueue);

const peekElement = browserQueue.peek();
console.log("peekElement :>> ", peekElement);

console.log("browserQueue :>> ", browserQueue);
