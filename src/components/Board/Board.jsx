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
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useMedia } from "react-use";
import { getAvailableRowIndex, hasColumnSpace } from "../../utils";

export const Board = ({ board, onColumnClick, currentPlayer, isDisabled }) => {
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
    if (hasColumnSpace(board, column)) {
      onColumnClick(column);
    }
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
              isDisabled={isDisabled}
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
  isDisabled,
}) => {
  const isMouse = useMedia("(pointer: fine)");
  const rowIndex = getAvailableRowIndex(items);

  useEffect(() => {
    console.log({
      rowIndex,
    });
  }, [rowIndex]);

  const { pressProps } = usePress({
    onPress,
    isDisabled,
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
      tabIndex={isDisabled ? -1 : 0}
      className={clsx("board__column", isDisabled && "board__column-disabled")}
      onKeyDown={handleKeyDown}
    >
      <>
        <div className="board__marker">
          {isActive && !isDisabled && isMouse && (
            <motion.div
              animate={{ scale: [1, 1.1] }}
              transition={{
                scale: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.5,
                },
              }}
              layoutId={`marker`}
            >
              <Marker color={currentPlayer} />
            </motion.div>
          )}
        </div>
        <motion.div
          style={{
            opacity: 0,
            position: "absolute",
            left: "50%",
            top: "0",
            translate: "-50% -100%",
            pointerEvents: "none",
          }}
          key={`counter-${colIndex}${rowIndex}`}
          layoutId={`counter-${colIndex}${rowIndex}`}
        >
          <Counter color={currentPlayer} />
        </motion.div>
        {items.map((counter, rowIndex) =>
          counter ? (
            <motion.div
              key={`counter-${colIndex}${rowIndex}`}
              layoutId={`counter-${colIndex}${rowIndex}`}
            >
              <Counter color={counter.color} highlight={counter.highlight} />
            </motion.div>
          ) : (
            <div key={`placeholder-${colIndex}${rowIndex}`}></div>
          )
        )}
      </>
    </div>
  );
};
