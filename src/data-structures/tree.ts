// Node Class
// accepts an argument that gets assigned top the data property
// and initialize an empty array for storing children
// methods: add and remove.

// Tree Class
// tree constructor should initialize a 'root' property to null.

// traverseBFS
// iterating on each level of the tree
// starting from the top
// from left ot right
// example: company position hierarchy

// traverseDFS
// starting from the root,
// trying to hit at the bottom of the tree

class TNode {
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
  