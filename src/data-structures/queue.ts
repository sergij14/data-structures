// Queue

// FIFO - first in first out
// creating an an array with some methods
// unshift - adding in the beginning,
// pop - removing from the end

export class Queue {
  data: any[];

  constructor() {
    this.data = [];
  }

  add(record: any) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
