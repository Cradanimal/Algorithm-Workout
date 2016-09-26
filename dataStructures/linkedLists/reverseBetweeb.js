const ListNode = function(val){
    this.val = val;
    this.next = null;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(node1);

const reverseBetween = function(head, m, n) {
  if (m === n) {
      return head;
  }
  let curNode = head;
  let prevNode = null;
  let nextNode = null;
  let end = head;
  let flag = true;
  let start = null
  while (m > 1) {
      flag = false;
      start = curNode;
      curNode = curNode.next;
      m--;
      n--;
  }
  end = curNode;
  while (n > 0) {
      nextNode = curNode.next;
      curNode.next = prevNode;
      prevNode = curNode;
      curNode = nextNode;
      n--;
  }

  if (flag) {
    head = prevNode;
  } else {
    start.next = prevNode;
  }
  if (curNode ){
    end.next = curNode;
  }
  return head 
   
};

console.log(reverseBetween(node1,3,4));
