/**
 * Building block of a tree
 * It holds the data in it
 *
 * Learning here
 * Always use the While loop to iterate through the node in data structure
 */
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Implement recursion here
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      // Initialises for left and right node
      // 9<6
      if (!this.root.left && value < this.root.value) {
        this.root.left = new Node(value);
      } else if (!this.root.right && value > this.root.value) {
        this.root.right = new Node(value);
      }

      // find node location Big O(log n)

      // While loop to iterate over all nodes
      let parentNode = this.root;
      let ancestorNode = null;
      console.clear();
      while (parentNode && parentNode.value !== null) {
        // Look up both left and right node and swap the ancestorNode
        if (parentNode.left?.value && value < parentNode.left?.value) {
          parentNode = parentNode.left;
          ancestorNode = parentNode;
        }
        if (parentNode.right?.value && value > parentNode.right?.value) {
          parentNode = parentNode.right;
          ancestorNode = parentNode;
        } else {
          parentNode = null;
        }
        console.log("parentNode :>> ", parentNode, value);
      }

      // console.log("parentNode :>> ", parentNode);
      console.log("ancestorNode :>> ", ancestorNode);

      // Parent node with no left or right node
      // 20 > 170
      if (ancestorNode) {
        // 160 > 170
        if (value > ancestorNode.value) {
          console.log(`Left -> `, value);
          let previousLeftNode = ancestorNode.left;

          ancestorNode.left = new Node(value);
          ancestorNode.left.left = previousLeftNode;
        } else {
          let previousRightNode = ancestorNode.right;

          ancestorNode.right = new Node(value);
          ancestorNode.right.right = previousRightNode;
          // ancestorNode.right = new Node(value);
        }
      }
    }
  }

  // findNodeLocation
  lookup(value) {}

  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(6);
tree.insert(20);

// tree.insert(4);
// console.log("tree :>> ", tree);
console.log(
  "------------------------------------------------------------------------"
);
tree.insert(170);

// console.log("tree :>> ", tree);
// tree.insert(15);
// tree.insert(1);
// tree.remove(171);
tree.insert(171);
tree.insert(160);
tree.insert(161);
// tree.insert(168);

// console.log("tree :>> ", tree);

console.log(
  "__________________________________________________________________________"
);
console.log("Traverse ->", JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(20));
// //     9
// //  4     20
// //1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
