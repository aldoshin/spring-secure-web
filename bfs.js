function bfs(r, c, lot) {
  function getAdj(i, j, dist) {
    var adj = [];

    var top = i - 1 >= 0 && lot[i - 1][j] > 0;
    var down = i + 1 < r && lot[i + 1][j] > 0;
    var left = j - 1 >= 0 && lot[i][j - 1] > 0;
    var right = j + 1 < c && lot[i][j + 1] > 0;

    top && adj.push([i - 1, j, dist]);
    down && adj.push([i + 1, j, dist]);
    left && adj.push([i, j - 1, dist]);
    right && adj.push([i, j + 1, dist]);

    return adj;
  }

  var q = [[0, 0, 0]];
  var m = 0;

  while (q.length) {
    var [n, ...rest] = q;

    var [i, j, dist] = n;

    if (lot[i][j] === 9) {
      return dist;
    }

    lot[i][j] = -1;
    var adj = getAdj(i, j, dist + 1);
    q = [...rest, ...adj];

    console.log("next q=", q);
    m++;
  }
}

console.log(
  bfs(5, 5, [
    [1, 1, 1, 1, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 1],
    [0, 1, 9, 1, 1],
    [1, 1, 1, 1, 1]
  ]) === 5
);

console.log(
  bfs(5, 5, [
    [1, 1, 1, 1, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 1],
    [0, 1, 1, 1, 1],
    [1, 1, 1, 1, 9]
  ]) === 9
);

console.log(bfs(3, 3, [[1, 0, 1], [1, 0, 0], [1, 9, 1]]) === 3);
