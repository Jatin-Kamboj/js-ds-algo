/**
 * Doubly Linked List
 * 
 * 
 */

class DoublyLinkedList {
  head = null;
  tail = null;

  constructor(value) {
    this.head = {
      value,
      next: null,
    };
  }
}


const list = new DoublyLinkedList(10)
console.log('list :>> ', list);