const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode()
      this.head.value = value
      return
    }
    const node = new ListNode();
    node.value = value
    let current = this.head
    while (current.next !== null) {
      current = current.next
    }
    current.next = node
  }

  dequeue() {
    const node = new ListNode();
    node.value = this.head.next.value;
    node.next = this.head.next.next;
    const tmp = this.head;
    this.head = node;
    return tmp.value
  }
}

module.exports = {
  Queue
};
