// Linked List
// Compared to Array:
// Linked lists does not have indexes.
// Arrays are in contiguous places in memory
// Linked lists could be all over the place.
// Linked lists have head(points to the first item) and tail(points to the last item)
// Each item points to the next to the next..., and last one points to null.

export class Node {
  next: Node | null = null;

  constructor(public data: any, next: Node) {
    this.data = data;
    this.next = next;
  }
}
