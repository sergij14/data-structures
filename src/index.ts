import { Queue, weave } from "./data-structures/queue";

const q1 = new Queue();
q1.add("1");
q1.add("2");

const q2 = new Queue();
q1.add(1);
q1.add(2);

const q = weave(q1, q2);

console.log(q);
