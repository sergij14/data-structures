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

// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// new queue contains the *alterating* content
// of the two queues.
export function weave(q1: Queue, q2: Queue) {
  const q = new Queue();

  while (q1.peek() || q2.peek()) {
    if (q1.peek()) {
      q.add(q1.remove());
    }
    if (q2.peek()) {
      q.add(q2.remove());
    }
  }

  return q;
}
