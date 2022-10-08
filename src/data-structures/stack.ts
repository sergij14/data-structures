// Stacks

// FILO - first in last out

export class Stack {
  data: number[];
  constructor() {
    this.data = [];
  }

  add(record: any) {
    this.data.push(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
