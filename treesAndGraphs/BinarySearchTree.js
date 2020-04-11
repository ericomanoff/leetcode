class BST {
  constructor({ TreeNode }) {
    this.root = null;
    this.TreeNode = TreeNode;
  }

  addNode(val) {
    let newNode = new this.TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.val === root.val) {
      throw new Error("duplicates can not exist in binary tree");
    }
    if (newNode.val < root.val) {
      if (root.left === null) {
        root.left = newNode;
        return;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
        return;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

module.exports = { BST };
