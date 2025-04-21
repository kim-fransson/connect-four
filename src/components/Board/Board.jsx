import "./Board.css";
import { Counter } from "./Counter/Counter";

export const Board = ({ board }) => {
  return (
    <div className="board__wrapper">
      <div className="board__grid">
        {board.map((column, colIndex) => (
          <div className="board__column" key={colIndex}>
            {column.map((counter, rowIndex) =>
              counter ? (
                <Counter key={rowIndex} color={counter.color} />
              ) : (
                <div></div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
