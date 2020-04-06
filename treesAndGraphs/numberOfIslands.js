const numIslands = (grid) => {
  if (grid == null || grid.length == 0) {
    return 0;
  }

  let rows = grid.length;
  let columns = grid[0].length;
  let islandCount = 0;

  //loop over every quardinate and check if it is an island
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "1") {
        islandCount++;
        dfs(grid, i, j);
      }
    }
  }

  return islandCount;
};

const dfs = (grid, r, c) => {
  let numRows = grid.length;
  let numCols = grid[0].length;
  if (r < 0 || c < 0 || r >= numRows || c >= numCols || grid[r][c] === "0") {
    return;
  }
  grid[r][c] = "0";
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
};

module.exports = { numIslands };
