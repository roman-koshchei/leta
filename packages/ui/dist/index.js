"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Keyboard: () => Keyboard
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
      href: "https://turborepo.org/docs/getting-started",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/keyboard/Keyboard.tsx
var import_react = require("react");

// src/keyboard/Key.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Key = ({ val, onDrop, onDrag }) => {
  const dragOver = (event) => event.preventDefault();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
var import_jsx_runtime = require("react/jsx-runtime");
var Keyboard = () => {
  const [keys, setKeys] = (0, import_react.useState)([
    ["w", "l", "y", "p", "k", "z", "x", "o", "u", ";", "[", "]", "\\"],
    ["c", "r", "s", "t", "b", "f", "n", "e", "i", "a", "'"],
    ["j", "v", "d", "g", "q", "m", "h", "/", ",", "."]
  ]);
  const [draged, setDraged] = (0, import_react.useState)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "aspect-[16/9]",
    children: keys.map((row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "flex",
      children: row.map(
        (key, colIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
          val: key,
          onDrag: () => drag(rowIndex, colIndex),
          onDrop: () => drop(rowIndex, colIndex)
        })
      )
    }))
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Keyboard
});
