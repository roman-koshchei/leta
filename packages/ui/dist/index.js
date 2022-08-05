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

// src/common/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ text }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-md bg-slate-400 p-3",
    children: text
  });
};

// src/keyboard/Keyboard.tsx
var import_react = require("react");

// src/keyboard/Key.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Key = ({ keyInfo, onDrag, onDrop }) => {
  const dragOver = (e) => e.preventDefault();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
var import_jsx_runtime = require("react/jsx-runtime");
var Keyboard = ({ setKeys, keys, fingers }) => {
  const [draged, setDraged] = (0, import_react.useState)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "aspect-[16/9]",
    children: keys.map(
      (row, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex",
        children: row.map(
          (keyInfo, colIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
            keyInfo,
            onDrop: () => drop(rowIndex, colIndex),
            onDrag: () => drag(rowIndex, colIndex)
          })
        )
      })
    )
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Keyboard
});
