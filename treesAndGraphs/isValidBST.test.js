const { isValidBST } = require("./isValidBST");

describe("isValidBst", () => {
  it("should validate a bst", () => {
    const input1 = [2, 1, 3];
    expect(isValidBST(input1)).toEqual(true);

    const input2 = [5, 1, 4, null, null, 3, 6];
    expect(isValidBST(input2)).toEqual(false);
  });
});
