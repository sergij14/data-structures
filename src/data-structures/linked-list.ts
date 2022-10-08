// Linked List
// Compared to Array:
// Linked lists does not have indexes.
// Arrays are in contiguous places in memory
// Linked lists could be all over the place.
// Linked lists have head(points to the first item) and tail(points to the last item)
// Each item points to the next to the next..., and last one points to null.

type NodeType = LLNode | null;

class LLNode {
  next: NodeType;

  constructor(public data: number, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: NodeType;

  constructor() {
    this.head = null;
  }

  insertFirst(data: number) {
    const newNode = new LLNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let node: NodeType = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }

      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
    }

    let prevNode: NodeType = null;
    let node: NodeType = this.head;

    while (node) {
      if (!node.next && prevNode) {
        prevNode.next = null;
        return;
      }

      prevNode = node;
      node = node.next;
    }
  }

  insertLast(data: number) {
    const newNode = new LLNode(data);
    const currLastNode = this.getLast();

    if (currLastNode) {
      currLastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getAt(idx: number) {
    if (!this.head) {
      return null;
    }

    let count = 0;
    let node: NodeType = this.head;

    while (node) {
      if (count === idx) {
        return node;
      }
      count++;
      node = node.next;
    }

    return null;
  }

  removeAt(idx: number) {
    if (!this.head) {
      return;
    }
    if (idx === 0) {
      this.head = this.head.next;
    }

    let prevNode = this.getAt(idx - 1);

    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next;
    }

    return;
  }

  forEach(fn: (node: LLNode) => void) {
    let node = this.head;
    let count = 0;
    while (node) {
      fn(node, count);
      node = node.next;
      count++;
    }
  }
}
