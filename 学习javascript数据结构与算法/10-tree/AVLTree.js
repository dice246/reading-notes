const BinarySearchTree = require('./BinarySearchTree')

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};

class AVLTree extends BinarySearchTree {
  constructor() {
    super();
  }

  getNodeHeight (node) {
    if (node === null) {
      return -1;
    }

    return Math.max(this.getNodeHeight(this.node.left), this.getNodeHeight(this.node.right)) + 1;
  }

  getBalanceFactor (node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
}
