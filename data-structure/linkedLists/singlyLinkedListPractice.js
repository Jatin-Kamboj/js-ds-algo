/**
 * Practice: Create a singly linked list from scratch
 * add DONE
 * remove DONE
 * insert (index,value) DONE
 * values DONE
 * prepend
 */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(value) {
    this.head = { value, next: null };

    this.tail = this.head;
    this.length++;
  }

  #buildNode(value, next = null) {
    return {
      value,
      next,
    };
  }

  add(value) {
    // Create a node
    // tail = newNode

    const newNode = this.#buildNode(value);
    // Head and tail are same node initially
    this.tail.next = newNode;
    // console.log("object :>> ", object);

    this.tail = newNode;
  }

  insert(index, value) {
    /**
     * Find node at index DONE
     * Create a new node DONE
     * Leader node which have reference to indexNode DONE
     *  Remove the reference of index node from leaderNode
     * update new node reference next to index node
     */

    const newNode = this.#buildNode(value);

    const leaderNode = this.findNode(index - 1);
    const currentNode = this.findNode(index);

    leaderNode.next = newNode;
    newNode.next = currentNode;
  }

  findNode(index) {
    let counter = 0;
    let resultNode = null;
    let currentNode = this.head;

    // Iterate from head to the tail using next reference
    // compare counter with index and stop there

    while (currentNode !== null) {
      if (counter === index) {
        resultNode = currentNode;
        break;
      }

      counter++;
      currentNode = currentNode.next;
    }

    return resultNode;
  }

  remove(index) {
    /**
     * Case 1: Index is in between
     *  Find currentNode
     *  LeaderNode
     *  Update the reference of currentNode
     * Case 2: If index is tail
     * Case 3: If index is head
     */

    const leaderNode = this.findNode(index - 1);
    const currenNode = this.findNode(index);

    leaderNode.next = currenNode?.next ?? null;
  }

  values() {
    let currenNode = this.head;
    const nodeValues = [];

    while (currenNode !== null) {
      nodeValues.push(currenNode.value);
      currenNode = currenNode.next;
    }

    return nodeValues;
  }

  prepend(value) {
    /**
     * TASK: Add a new node at first place
     *
     * Create a new node
     *  Update the head reference
     *
     */

    const newNode = this.#buildNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }
}

// This is a list of person
// We can add persons and their details
const persons = new LinkedList("Jatin");
persons.add("Sanjeev");
persons.add("Rahul");
persons.add("Ramu");

// Insert a new node value
persons.insert(2, "insert");

persons.remove(4);

persons.prepend("John");

// Print all values of a node
const nodeValues = persons.values();
console.log("nodeValues :>> ", nodeValues);
