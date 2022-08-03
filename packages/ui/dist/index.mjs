// src/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://turborepo.org/docs/getting-started",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ jsx("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/keyboard/Keyboard.tsx
import { useState } from "react";

// src/keyboard/Key.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Key = ({ val, onDrop, onDrag }) => {
  const dragOver = (event) => event.preventDefault();
  return /* @__PURE__ */ jsx2("div", {
    className: "aspect-[1/1] pointer-events-none",
    draggable: true,
    style: { width: "50px", height: "50px", background: "white", margin: "5px" },
    onDrop,
    onDrag,
    onDragOver: dragOver,
    children: val
  });
};

// src/keyboard/Keyboard.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Keyboard = () => {
  const [keys, setKeys] = useState([
    ["w", "l", "y", "p", "k", "z", "x", "o", "u", ";", "[", "]", "\\"],
    ["c", "r", "s", "t", "b", "f", "n", "e", "i", "a", "'"],
    ["j", "v", "d", "g", "q", "m", "h", "/", ",", "."]
  ]);
  const [draged, setDraged] = useState({
    row: -1,
    col: -1
  });
  const dragOver = (event) => {
    event.preventDefault();
  };
  const drag = (rowIndex, colIndex) => {
    setDraged({ row: rowIndex, col: colIndex });
  };
  const drop = (rowIndex, colIndex) => {
    const dragedKey = keys[draged.row][draged.col];
    let newKeys = Array.from(keys);
    newKeys[draged.row][draged.col] = keys[rowIndex][colIndex];
    newKeys[rowIndex][colIndex] = dragedKey;
    setKeys(newKeys);
  };
  return /* @__PURE__ */ jsx3("div", {
    className: "aspect-[16/9]",
    children: keys.map((row, rowIndex) => /* @__PURE__ */ jsx3("div", {
      className: "flex",
      children: row.map(
        (key, colIndex) => /* @__PURE__ */ jsx3(Key, {
          val: key,
          onDrag: () => drag(rowIndex, colIndex),
          onDrop: () => drop(rowIndex, colIndex)
        })
      )
    }))
  });
};
export {
  Button,
  Keyboard
};
