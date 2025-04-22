/**
 * Binary tree
 * Data is structured in heirarichal format
 * Parent -> Child -> Leaf nodes
 *
 * No of nodes they have
 * A node have 0 or 2 nodes nested nodes
 *
 * Based upon the height the maximum number of operations we need to perform to find a node
 * Big (O) -> O(log n)
 * ^h // h is the height of the tree / Maximum No of levels in a tree which we need to go to find a result
 * Or mximum no of operation we need to perform to find an element in a tree
 *
 * O(log n) -> Notation [[Faster and nearly identical to O(1) notation]]
 * We use the divide and conquer and search the record in a small subset of data
 * where we think the data will exist such as a Phone book we search the contact number
 * using alpahbets
 *
 * Divide the contacts by the alphabet of contact number
 *
 * Difference/Benefit : We don't need to check every single elements as we do in Arrays to iterate over all the elements (LINEAR SEARCH)
 *    Because we can use the heirarichal data to nest and find through the elements
 *
 * Pros
 *    Faster retrieval of data when there is high amount of data
 *    O(log n)
 *    Data is herirarchial and maintains relation between the nodes
 *    Sorted
 *
 * Cons
 *    Edge cases to find data
 *    Data is not ordered
 *
 *
 */

class Node {
  // Each node have 2 child nodes
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Create new node
   * Handle left and right nodes
   * Left will be lesser and right will be higher
   *
   * 1. Handle root empty case
   * 2. Iterate over nodes
   * 3. Find where node will be placed
   *      left or right
   */
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < this.root.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;

            return this;
          }

          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const family = new BinaryTree();

family.insert(30);
family.insert(20);
family.insert(22);

family.insert(40);
family.insert(50);

console.log("family :>> ", family);
