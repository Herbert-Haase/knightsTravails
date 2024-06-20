function nextMoves(start) {
  const squares = [];
  squares.push([start[0] + 2, start[1] + 1]);
  squares.push([start[0] + 2, start[1] - 1]);
  squares.push([start[0] - 2, start[1] + 1]);
  squares.push([start[0] - 2, start[1] - 1]);
  squares.push([start[0] + 1, start[1] + 2]);
  squares.push([start[0] + 1, start[1] - 2]);
  squares.push([start[0] + 2, start[1] - 1]);
  squares.push([start[0] - 1, start[1] - 2]);
  const allowedSquares = squares.filter((square) => {
    return square[0] <= 7 && square[0] >= 0 && square[1] <= 7 && square[1] >= 0;
  });
  return allowedSquares;
}

export { nextMoves };
