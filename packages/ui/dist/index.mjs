// src/Button.tsx
import { Hand } from "models";
import { jsx, jsxs } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://turborepo.org/docs/getting-started",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          Hand.Left,
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
import { jsxs as jsxs2 } from "react/jsx-runtime";
var Key = ({ keyInfo, onDrag, onDrop }) => {
  const dragOver = (e) => e.preventDefault();
  return /* @__PURE__ */ jsxs2("div", {
    draggable: true,
    className: "m-1",
    onDragOver: dragOver,
    onDrag,
    onDrop,
    children: [
      keyInfo.shift,
      keyInfo.primary
    ]
  });
};

// src/keyboard/Keyboard.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Keyboard = ({ setKeys, keys, fingers }) => {
  const [draged, setDraged] = useState({
    row: -1,
    col: -1
  });
  const drag = (row, col) => setDraged({ row, col });
  const drop = (row, col) => {
    const dragedKey = keys[draged.row][draged.col];
    let newKeys = Array.from(keys);
    newKeys[draged.row][draged.col] = keys[row][col];
    newKeys[row][col] = dragedKey;
    setKeys(newKeys);
  };
  return /* @__PURE__ */ jsx2("div", {
    className: "aspect-[16/9]",
    children: keys.map(
      (row, rowIndex) => /* @__PURE__ */ jsx2("div", {
        className: "flex",
        children: row.map(
          (keyInfo, colIndex) => /* @__PURE__ */ jsx2(Key, {
            keyInfo,
            onDrop: () => drop(rowIndex, colIndex),
            onDrag: () => drag(rowIndex, colIndex)
          })
        )
      })
    )
  });
};
export {
  Button,
  Keyboard
};
