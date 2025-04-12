// Definition for singly-linked list node
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));

const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// Create list1: 1 -> 2 -> 4
// Create list2: 1 -> 3 -> 4
function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(-1);
  let current = dummy;

  while (list1 && list2) {
    let listName = `list1`;
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
      listName = `list2`;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
}

const result = mergeTwoLists(list1, list2);

console.log("result :>> ", result);
