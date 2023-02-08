class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    let node = new Node(data);
    if (this.root == null) {
      this.root = node;
    } else {
      this.addChildNode(this.root, node);
    }
  }

  addChildNode(root, node) {
    if (node < root.data) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.addChildeNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.addChildNode(root.right, node);
      }
    }
  }

  inOrder(root) {
    if (root == null) {
      return null;
    }
    this.inOrder(root.left);
    console.log(root.data);
    this.inOrder(root.right);
  }
  postOrder(root) {
    if (root == null) {
      return null;
    }
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.data);
  }

  preOrder(root) {
    if (root == null) {
      return null;
    }
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  search(val , root){
    if(root.data == val){
        return true
    }
    if(val< root.data){
        this.search(root.left, val)
    }else{
        this.search(root.right, val)
    }
    return false
  }
}


let bst = new BinarySearchTree()
bst.addNode(10)
bst.addNode(15)
bst.addNode(6)
bst.addNode(54)
bst.addNode(3)
bst.addNode(12)
console.log('inorder');
bst.inOrder(bst.root)
console.log('postOrder');
bst.postOrder(bst.root)
console.log('preOrder');
bst.preOrder(bst.root)
console.log("-------------------------");
bst.search(3,bst.root)
