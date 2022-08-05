// src/common/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ text }) => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md bg-slate-400 p-3",
    children: text
  });
};

// src/keyboard/Keyboard.tsx
import { useState } from "react";

// src/keyboard/Key.tsx
import { jsxs } from "react/jsx-runtime";
var Key = ({ keyInfo, onDrag, onDrop }) => {
  const dragOver = (e) => e.preventDefault();
  return /* @__PURE__ */ jsxs("div", {
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
