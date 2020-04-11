const { findKthLargest } = require("./kthLargestElement");
describe("kthlargest element", () => {
  it("should work", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
  });
});
