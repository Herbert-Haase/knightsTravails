import { nextMoves } from "./nextMoves.js";

function knightMoves(start, destination) {
  const paths = [];
  let destinationReached = false;

  function heuristic(currentPosition, destination) {
    return (
      Math.abs(currentPosition[0] - destination[0]) +
      Math.abs(currentPosition[1] - destination[1])
    );
  }

  function _knightMoves(currentPosition, path) {
    if (destinationReached || paths.length >= 10000) return; // Prune if destination reached or too many paths explored

    path.push(currentPosition);

    if (
      currentPosition[0] === destination[0] &&
      currentPosition[1] === destination[1]
    ) {
      destinationReached = true;
      paths.push([...path]);
      return;
    }

    // Sort the available moves based on their heuristic distance to the destination
    const sortedSquares = [...nextMoves(currentPosition)].sort(
      (a, b) => heuristic(a, destination) - heuristic(b, destination)
    );

    for (let square of sortedSquares) {
      if (
        !path.some((subArray) =>
          subArray.every((value, index) => value === square[index])
        )
      ) {
        _knightMoves(square, [...path]);
      }
    }
  }

  _knightMoves(start, []);
  console.log(`You made it in ${paths[0].length} moves! Here's your path`);
  return paths.length > 0 ? paths[0] : null;
}

export { knightMoves };
