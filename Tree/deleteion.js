class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    delete(value, node = this.root) {
      if (!node) {
        return null;
      }
  
      if (value < node.value) {
        node.left = this.delete(value, node.left);
      } else if (value > node.value) {
        node.right = this.delete(value, node.right);
      } else {
        if (!node.left && !node.right) {
          return null;
        }
  
        if (!node.left) {
          return node.right;
        }
  
        if (!node.right) {
          return node.left;
        }
  
        let minNode = this.getMinNode(node.right);
        node.value = minNode.value;
        node.right = this.delete(minNode.value, node.right);
      }
  
      return node;
    }
  
    getMinNode(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
  }
  