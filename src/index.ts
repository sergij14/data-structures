import { LinkedList } from "./data-structures";

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);

ll.insertLast(4);


// 3 --> 2 --> 1 ==> 4

ll.forEach((node) => console.log(node))