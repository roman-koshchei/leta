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
  DragKeyboard: () => DragKeyboard,
  Input: () => Input,
  Keyboard: () => Keyboard
});
module.exports = __toCommonJS(src_exports);

// src/keyboard/KeyboardBase.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var KeyboardBase = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: `aspect-[1200/300] text-sm md:text-base`,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "flex flex-col gap-1 md:gap-2 h-full",
      children
    })
  });
};

// src/keyboard/keys/Key.tsx
var import_models = require("models");

// src/keyboard/keys/KeyBase.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var KeyBase = ({ children, w, bg, cursor = "cursor-default", ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: `flex-auto rounded-md p-0.5 md:p-1 ${w} ${bg} ${cursor}`,
    ...rest,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "flex h-full justify-center items-center select-none",
      children
    })
  });
};

// src/keyboard/keys/Key.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var FullInfo = ({ keyInfo }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "relative h-full w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "absolute left-[45%] top-[20%] leading-none text-base md:text-lg",
        children: keyInfo.primary
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: " absolute left-0 top-0 text-xs md:text-sm leading-none",
        children: keyInfo.shift
      })
    ]
  });
};
var Key = ({ keyInfo, w, onClick, onDrag, onDragOver, onDrop, draggable, ...rest }) => {
  const bgColor = keyInfo.active ? import_models.FingerColors.get(keyInfo.finger) : "bg-slate-300";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
    w,
    bg: bgColor ?? "",
    onDrag,
    onDrop,
    onDragOver,
    onClick,
    draggable,
    ...rest,
    children: keyInfo.primary == keyInfo.shift.toLowerCase() ? keyInfo.shift : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullInfo, {
      keyInfo
    })
  });
};

// src/keyboard/rows/Row.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Row = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex flex-1 gap-1 md:gap-2",
    children
  });
};

// src/keyboard/Keyboard.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Keyboard = ({ keys, keyDrag: onKeyDrag, keyDrop: onKeyDrop, onKeyDragOver, keyClick }) => {
  const InKey = onKeyDrag != void 0 && onKeyDrop != void 0 ? ({ keyInfo, w, row, col }) => {
    return keyInfo.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
      keyInfo,
      w,
      onDrag: () => onKeyDrag(row, col),
      onDrop: () => onKeyDrop(row, col),
      draggable: true,
      onDragOver: onKeyDragOver,
      onClick: keyClick ? () => keyClick(row, col) : void 0
    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
      keyInfo,
      w
    });
  } : ({ keyInfo, w }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
    keyInfo,
    w
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KeyboardBase, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
        children: [
          keys[0].map(
            (key, col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InKey, {
              col,
              row: 0,
              keyInfo: key,
              w: "w-14"
            }, col)
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
            w: "w-32",
            bg: "bg-slate-300",
            children: "Backspace"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
            w: "w-24",
            bg: "bg-slate-300",
            children: "Tab"
          }),
          keys[1].map(
            (key, col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InKey, {
              col,
              row: 1,
              keyInfo: key,
              w: col == keys[0].length - 1 ? "w-24" : "w-14"
            }, col)
          )
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
            w: "w-28",
            bg: "bg-slate-300",
            children: "Caps"
          }),
          keys[2].map(
            (key, col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InKey, {
              col,
              row: 2,
              keyInfo: key,
              w: "w-14"
            }, col)
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
            w: "w-36",
            bg: "bg-slate-300",
            children: "Enter"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Row, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
            w: "w-36",
            bg: "bg-slate-300",
            children: "Shift"
          }),
          keys[3].map(
            (key, col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InKey, {
              col,
              row: 3,
              keyInfo: key,
              w: "w-14"
            }, col)
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
            w: "w-44",
            bg: "bg-slate-300",
            children: "Shift"
          })
        ]
      })
    ]
  });
};

// src/keyboard/DragKeyboard.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var DragKeyboard = ({ keys, setKeys, keyClick }) => {
  const [draged, setDraged] = (0, import_react.useState)({
    row: -1,
    col: -1
  });
  const dragOver = (e) => e.preventDefault();
  const drag = (row, col) => {
    setDraged({ row, col });
  };
  const drop = (row, col) => {
    const dragedKey = keys[draged.row][draged.col];
    let newKeys = Array.from(keys);
    newKeys[draged.row][draged.col] = {
      ...newKeys[draged.row][draged.col],
      primary: keys[row][col].primary,
      shift: keys[row][col].shift
    };
    newKeys[row][col] = {
      ...newKeys[row][col],
      primary: dragedKey.primary,
      shift: dragedKey.shift
    };
    setKeys(newKeys);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keyboard, {
    keys,
    keyDrag: drag,
    keyDrop: drop,
    onKeyDragOver: dragOver,
    keyClick
  });
};

// src/common/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-md bg-blue-400 text-white px-3 py-1 w-fit select-none",
    children
  });
};

// src/common/Input.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Input = ({ val, onChange }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
    className: "bg-gray-100 border outline-none border-gray-100\r\n      text-gray-900 text-sm rounded-md p-2",
    value: val,
    onChange
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  DragKeyboard,
  Input,
  Keyboard
});
