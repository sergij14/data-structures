// Linked List
// Compared to Array:
// Linked lists does not have indexes.
// Arrays are in contiguous places in memory
// Linked lists could be all over the place.
// Linked lists have head(points to the first item) and tail(points to the last item)
// Each item points to the next to the next..., and last one points to null.

class Node {
  next: Node | null;

  constructor(public data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  insertFirst(data: any) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}
