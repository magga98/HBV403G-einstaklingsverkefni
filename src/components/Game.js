import React from "react";
import { useParams } from "react-router-dom";
import "./Game.css";

const getShuffledPuzzle = () => {
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const rowOne = [];
  const rowTwo = [];
  const rowThree = [];

  while (values.length) {
    const random = Math.floor(Math.random() * values.length);

    if (rowOne.length < 3) {
      rowOne.push(values.splice(random, 1)[0]);
    } else if (rowTwo.length < 3) {
      rowTwo.push(values.splice(random, 1)[0]);
    } else {
      rowThree.push(values.splice(random, 1)[0]);
    }
  }

  return [rowOne, rowTwo, rowThree];
};

const flattenArray = arr => {
  return arr.reduce((flatArr, subArr) => flatArr.concat(subArr), []);
};

const getInversionsCount = arr => {
  arr = flattenArray(arr).filter(n => n !== 0);

  const inversions = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const currentValue = arr[i];
    const currentInversions = arr.filter(
      (val, j) => i < j && val < currentValue
    );
    inversions.push(currentInversions.length);
  }

  const inversionsCount = inversions.reduce((total, val) => total + val, 0);

  return inversionsCount;
};

const isSolvable = puzzle => {
  return getInversionsCount(puzzle) % 2 === 0;
};

const getPuzzle = () => {
  let puzzle = getShuffledPuzzle();

  while (!isSolvable(puzzle)) {
    puzzle = getShuffledPuzzle();
  }

  return puzzle;
};

export default function Game() {
  const [puzzle, setPuzzle] = React.useState([]);
  const [complete, setComplete] = React.useState(false);
  const [moves, setMoves] = React.useState(0);

  React.useEffect(() => {
    setPuzzle(getPuzzle());
  }, []);

  const movePiece = (x, y) => {
    if (!complete) {
      if (checkNeighbours(x, y) || checkNeighbours(x, y, 2)) {
        const emptySlot = checkNeighbours(x, y) || checkNeighbours(x, y, 2);

        const newPuzzle = puzzle.map(row => row.slice());

        if (x === emptySlot.x && y < emptySlot.y) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y + 1];
          newPuzzle[x][y + 1] = newPuzzle[x][y];
          newPuzzle[x][y] = 0;
        } else if (x === emptySlot.x && y > emptySlot.y) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y - 1];
          newPuzzle[x][y - 1] = newPuzzle[x][y];
          newPuzzle[x][y] = 0;
        }

        if (y === emptySlot.y && x < emptySlot.x) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x + 1][y];
          newPuzzle[x + 1][y] = newPuzzle[x][y];
          newPuzzle[x][y] = 0;
        } else if (y === emptySlot.y && x > emptySlot.x) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x - 1][y];
          newPuzzle[x - 1][y] = newPuzzle[x][y];
          newPuzzle[x][y] = 0;
        }

        setPuzzle(newPuzzle);

        setMoves(moves + 1);

        checkCompletion(newPuzzle);
      }
    }
  };

  const checkCompletion = puzzle => {
    if (flattenArray(puzzle).join("") === "123456780") {
      setComplete(true);
    }
  };

  const checkNeighbours = (x, y, d = 1) => {
    const neighbours = [];

    if (puzzle[x][y] !== 0) {
      neighbours.push(
        puzzle[x - d] && puzzle[x - d][y] === 0 && { x: x - d, y: y }
      );
      neighbours.push(puzzle[x][y + d] === 0 && { x: x, y: y + d });
      neighbours.push(
        puzzle[x + d] && puzzle[x + d][y] === 0 && { x: x + d, y: y }
      );
      neighbours.push(puzzle[x][y - d] === 0 && { x: x, y: y - d });
    }

    const emptySlot = neighbours.find(el => typeof el === "object");

    return emptySlot;
  };

  const resetPuzzle = () => {
    setComplete(false);
    setPuzzle(getPuzzle());
    setMoves(0);
  };
  const { slug } = useParams();
  console.log(slug);
  return (
    <div className="game">
      {<h3>Moves: {moves}</h3>}
      <div className="Board" style={{
          display: "inline-block",
          width: "400px",
          height: "400px",
          borderRadius: 5,
          padding: 5, 
        }}>
        {puzzle.map((row, i) => (
          <div key={i} style={{ display: "flex" }}>
            {row.map((col, j) => {
                const color = col === 1 ? `url('../images/${slug}/1.jpg')` : 
                col === 2 ? `url('../images/${slug}/2.jpg')` :
                col === 3 ? `url('../images/${slug}/3.jpg')` :
                col === 4 ? `url('../images/${slug}/4.jpg')` :
                col === 5 ? `url('../images/${slug}/5.jpg')` :
                col === 6 ? `url('../images/${slug}/6.jpg')` :
                col === 7 ? `url('../images/${slug}/7.jpg')` :
                col === 8 ? `url('../images/${slug}/8.jpg')` : "none";
              return (
                <div className="tile"
                  key={`${i}-${j}`}
                  onClick={() => movePiece(i, j)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "130px",
                    height: "130px",
                    margin: 1.5,
                    backgroundImage: color,
                    borderRadius: 5,
                    cursor: complete ? "not-allowed" : "pointer",
                    userSelect: "none"
                  }}>
                  <span style={{ fontSize: "2rem", fontWeight: "bold", color: "transparent"}}>
                    {col !== 0 && col}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {complete && (
        <p>
          <button className="button-play" onClick={() => {resetPuzzle();
            }}
          >
            Spila Aftur
          </button>
        </p>
      )}
    </div>
  );
}
