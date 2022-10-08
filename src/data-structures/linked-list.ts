// Linked List
// Compared to Array:
// Linked lists does not have indexes.
// Arrays are in contiguous places in memory
// Linked lists could be all over the place.
// Linked lists have head(points to the first item) and tail(points to the last item)
// Each item points to the next to the next..., and last one points to null.

type NodeType = Node | null;

class Node {
  next: NodeType;

  constructor(public data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: NodeType;

  constructor() {
    this.head = null;
  }

  insertFirst(data: any) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let node = this.head;

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
      return null;
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
}
