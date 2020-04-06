const { numIslands } = require("./numberOfIslands");
describe("numIslands", () => {
  it("should count the number of islands", () => {
    let map1 = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];

    let map2 = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(map1)).toEqual(1);
    expect(numIslands(map2)).toEqual(3);
  });
});
