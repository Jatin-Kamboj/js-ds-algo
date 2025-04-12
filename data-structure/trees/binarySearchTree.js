class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root = null;
  constructor() {}

  insert(value) {
    /**
     * If root null
     *  root = new Node(value)
     *
     * else
     *  While loop
     *    Check valus is lesser that left
     *      Move to left
     *    Else move to right
     */

    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            // Terminate the loop
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            // Terminate the loop
            return this;
          }
          // by default .right or .left will be null
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(7);
tree.insert(12);
console.log("tree :>> ", tree);
