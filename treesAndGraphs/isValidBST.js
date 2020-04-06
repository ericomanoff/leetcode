const isValidBST = (root) => {
  return validator(root, null, null);
};

const validator = (node, lower, upper) => {
  if (node == null) {
    return true;
  }

  val = node.val;
  if (lower !== null && val <= lower) return false;
  if (upper !== null && val >= upper) return false;

  if (!validator(node.right, val, upper)) return false;
  if (!validator(node.left, lower, val)) return false;
  return true;
};

module.exports = { isValidBST };
