import { Queue } from "../data-structures/queue";

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
  