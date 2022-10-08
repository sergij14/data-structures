// Node Class
// accepts an argument that gets assigned top the data property
// and initialize an empty array for storing children
// methods: add and remove.

// Tree Class
// tree constructor should initialize a 'root' property to null.

// traverseBF
// iterating on each level of the tree
// starting from the top
// from left ot right
// example: company position hierarchy

// traverseDF
// starting from the root,
// trying to hit at the bottom of the tree

type TNodeType = TNode | null;

export class TNode {
  data: number;
  children: TNode[];

  constructor(data: number) {
    this.data = data;
    this.children = [];
  }

  add(data: number) {
    const newNode = new TNode(data);
    this.children.push(newNode);
  }

  remove(data: number) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

export class Tree {
  root: TNodeType;

  constructor() {
    this.root = null;
  }

  traverseBF(cb: (node: TNode) => void) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      if (node) {
        node.children.forEach((node) => arr.push(node));

        cb(node);
      }
    }
  }

  traverseDF(cb: (node: TNode) => void) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      if (node) {
        node.children.forEach((node) => arr.unshift(node));

        cb(node);
      }
    }
  }
}
