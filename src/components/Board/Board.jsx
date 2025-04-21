import {
  FocusScope,
  mergeProps,
  useFocusManager,
  useFocusRing,
  useFocusVisible,
  useHover,
  usePress,
} from "react-aria";
import { Counter } from "./Counter/Counter";
import { Marker } from "./Marker/Marker";
import { motion } from "motion/react";

import "./Board.css";

export const Board = ({ board, onColumnClick, currentPlayer }) => {
  const handleColumnPress = (column) => {
    onColumnClick(column);
  };
  return (
    <div className="board__wrapper">
      <div className="board__grid">
        <FocusScope>
          {board.map((column, index) => (
            <Column
              key={`column-${index}`}
              index={index}
              items={column}
              onPress={() => handleColumnPress(index)}
              currentPlayer={currentPlayer}
            />
          ))}
        </FocusScope>
      </div>
    </div>
  );
};

const Column = ({ index: colIndex, items, onPress, currentPlayer }) => {
  const { pressProps } = usePress({
    onPress,
  });

  const { hoverProps, isHovered } = useHover({});
  const { focusProps, isFocusVisible } = useFocusRing({});
  const focusManager = useFocusManager();
  const handleKeyDown = (e) => {
    console.log({ key: e.key });
    switch (e.key) {
      case "ArrowRight":
        focusManager.focusNext({ wrap: true });
        break;
      case "ArrowLeft":
        focusManager.focusPrevious({ wrap: true });
        break;
      case "Enter":
      case " ":
        onPress();
    }
  };
  return (
    <div
      {...mergeProps(pressProps, hoverProps, focusProps)}
      role="button"
      tabIndex={0}
      className="board__column"
      onKeyDown={handleKeyDown}
    >
      <>
        {(isHovered || isFocusVisible) && (
          <motion.div
            animate={{ scale: [1, 1.1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.6,
            }}
          >
            <Marker className="board__marker" color={currentPlayer} />
          </motion.div>
        )}
        {items.map((counter, rowIndex) =>
          counter ? (
            <Counter
              key={`placeholder-${colIndex}${rowIndex}`}
              color={counter.color}
              highlight={counter.highlight}
            />
          ) : (
            <div key={`placeholder-${colIndex}${rowIndex}`}></div>
          )
        )}
      </>
    </div>
  );
};
