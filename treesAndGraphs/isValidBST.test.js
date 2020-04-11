const { BST } = require("./BinarySearchTree");
const { TreeNode } = require("./TreeNode");
const { isValidBST } = require("./isValidBST");

describe("isValidBst", () => {
  it("should return true on a validate a bst", () => {
    const input1 = [2, 1, 3];
    const bst1 = new BST({ TreeNode });
    for (let i = 0; i < input1.length; i++) {
      bst1.addNode(input1[i]);
    }
    expect(isValidBST(bst1)).toEqual(true);
  });

  // it("should return false on an invalid bst", () => {
  //   const input2 = [5, 1, 4, null, null, 3, 6];
  //   const bst2 = new BST({ TreeNode });
  //   for (let i = 0; i < input2.length; i++) {
  //     bst2.addNode(input2[i]);
  //   }
  //   expect(isValidBST(input2)).toEqual(false);
  // });
});
