class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
    this.last = null;
  }
  push(elem) {
    let newNode = new Node(elem);
    newNode.prev = this.last;
    this.last = newNode;
    this.storage[this.size] = elem;
    this.size++;
  }
  pop() {
    if (this.last !== null) {
      var topItem = this.last.value;
      this.last = this.last.prev;
      return topItem;
    }
    return null;
  }
}
