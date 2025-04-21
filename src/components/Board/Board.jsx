import {
  FocusScope,
  mergeProps,
  useFocus,
  useFocusManager,
  useHover,
  usePress,
} from "react-aria";
import { Counter } from "./Counter/Counter";
import { Marker } from "./Marker/Marker";
import { motion } from "motion/react";

import "./Board.css";
import { useRef, useState } from "react";

export const Board = ({ board, onColumnClick, currentPlayer }) => {
  const [activeColumn, setActiveColumn] = useState(null);
  const markerTimeout = useRef(null);

  const updateActiveColumn = (index) => {
    clearTimeout(markerTimeout.current);
    setActiveColumn(index);
  };

  const clearActiveColumn = () => {
    markerTimeout.current = setTimeout(() => {
      setActiveColumn(null);
    }, 500);
  };
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
              isActive={index === activeColumn}
              updateActiveColumn={updateActiveColumn}
              clearActiveColumn={clearActiveColumn}
            />
          ))}
        </FocusScope>
      </div>
    </div>
  );
};

const Column = ({
  index: colIndex,
  items,
  onPress,
  currentPlayer,
  updateActiveColumn,
  clearActiveColumn,
  isActive,
}) => {
  const { pressProps } = usePress({
    onPress,
  });

  const { hoverProps } = useHover({
    onHoverChange: (isHover) =>
      isHover ? updateActiveColumn(colIndex) : clearActiveColumn(),
  });
  const { focusProps } = useFocus({
    onFocusChange: (isFocus) =>
      isFocus ? updateActiveColumn(colIndex) : clearActiveColumn(),
  });
  const focusManager = useFocusManager();
  const handleKeyDown = (e) => {
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
        {isActive && (
          <motion.div
            animate={{ scale: [1, 1.1] }}
            transition={{
              scale: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.6,
              },
            }}
            layoutId={`marker`}
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
