import { TNode, Tree } from "./data-structures/tree";

const t = new Tree();
t.root = new TNode(1);
t.root.add(2);
t.root.add(3);

let numbers: number[] = [];

t.traverseBF((node) => numbers.push(node.data));

console.log(numbers);
