class LinkedList {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
    this.amount = 0;
    this.head = null;
    this.tail = null;
  }
  push(value) {
    const newNode = new LinkedList(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.amount++;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.amount++;
    return this;
  }
  pop() {
    if (!this.tail) {
      return null;
    }
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    this.amount--;
  }
  find(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  iterate(f) {
    var currentNode = this.head;
    while (currentNode !== null) {
      f(currentNode);
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  insertAfter(t, d) {
    let currentNode = this.head;
    if (!this.find(t)) return false;
    while (currentNode !== null) {
      if (currentNode.value === t) {
        let temp = new LinkedList();
        temp.value = d;
        temp.next = currentNode.next;
        if (currentNode == this.tail) this.tail = temp;
        currentNode.next = temp;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  removeItem(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }

    return true;
  }
}
