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
var Button = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-md bg-blue-400 text-white px-3 py-1",
    children
  });
};

// src/keyboard/Keyboard.tsx
var import_react = require("react");

// src/keyboard/KeyBase.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var KeyBase = ({ children, w, color, cursor = "default", ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: `flex-auto rounded-md p-0.5 md:p-1 w-${w} bg-${color} cursor-${cursor}`,
    ...rest,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "flex h-full justify-center items-center",
      children
    })
  });
};

// src/keyboard/Key.tsx
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
var Key = ({ keyInfo, w, ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
    w,
    color: "green-300",
    ...rest,
    children: keyInfo.primary == keyInfo.shift.toLowerCase() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      children: keyInfo.shift
    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullInfo, {
      keyInfo
    })
  });
};

// src/keyboard/DragKey.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var DragKey = ({ keyInfo, onDrag, onDrop, w }) => {
  const dragOver = (e) => e.preventDefault();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
    w,
    keyInfo,
    cursor: "move",
    draggable: true,
    onDragOver: dragOver,
    onDrag,
    onDrop
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
    className: "aspect-[1200/220] max-w-5xl text-sm md:text-base",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "flex flex-col gap-1 md:gap-2 h-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex flex-1 gap-1 md:gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
              w: 24,
              color: "slate-300",
              children: "Tab"
            }),
            keys[0].map(
              (key, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragKey, {
                onDrag: () => drag(0, i),
                onDrop: () => drop(0, i),
                keyInfo: key,
                w: i == keys[0].length - 1 ? 24 : 14
              })
            )
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex flex-1 gap-1 md:gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
              w: 28,
              color: "slate-300",
              children: "Caps"
            }),
            keys[1].map(
              (key, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragKey, {
                onDrag: () => drag(1, i),
                onDrop: () => drop(1, i),
                keyInfo: key,
                w: 14
              })
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
              w: 36,
              color: "slate-300",
              children: "Enter"
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex  flex-1 gap-1 md:gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
              w: 36,
              color: "slate-300",
              children: "Shift"
            }),
            keys[2].map(
              (key, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragKey, {
                onDrag: () => drag(2, i),
                onDrop: () => drop(2, i),
                keyInfo: key,
                w: 14
              })
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyBase, {
              w: 44,
              color: "slate-300",
              children: "Shift"
            })
          ]
        })
      ]
    })
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Keyboard
});
