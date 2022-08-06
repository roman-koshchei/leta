// src/common/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ children }) => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md bg-blue-400 text-white px-3 py-1",
    children
  });
};

// src/keyboard/Keyboard.tsx
import { useState } from "react";

// src/keyboard/KeyBase.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var KeyBase = ({ children, w, color, cursor = "default", ...rest }) => {
  return /* @__PURE__ */ jsx2("div", {
    className: `flex-auto rounded-md p-0.5 md:p-1 w-${w} bg-${color} cursor-${cursor}`,
    ...rest,
    children: /* @__PURE__ */ jsx2("div", {
      className: "flex h-full justify-center items-center",
      children
    })
  });
};

// src/keyboard/Key.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var FullInfo = ({ keyInfo }) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "relative h-full w-full",
    children: [
      /* @__PURE__ */ jsx3("div", {
        className: "absolute left-[45%] top-[20%] leading-none text-base md:text-lg",
        children: keyInfo.primary
      }),
      /* @__PURE__ */ jsx3("div", {
        className: " absolute left-0 top-0 text-xs md:text-sm leading-none",
        children: keyInfo.shift
      })
    ]
  });
};
var Key = ({ keyInfo, w, ...rest }) => {
  return /* @__PURE__ */ jsx3(KeyBase, {
    w,
    color: "green-300",
    ...rest,
    children: keyInfo.primary == keyInfo.shift.toLowerCase() ? /* @__PURE__ */ jsx3("span", {
      children: keyInfo.shift
    }) : /* @__PURE__ */ jsx3(FullInfo, {
      keyInfo
    })
  });
};

// src/keyboard/DragKey.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var DragKey = ({ keyInfo, onDrag, onDrop, w }) => {
  const dragOver = (e) => e.preventDefault();
  return /* @__PURE__ */ jsx4(Key, {
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
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx5("div", {
    className: "aspect-[1200/220] max-w-5xl text-sm md:text-base",
    children: /* @__PURE__ */ jsxs2("div", {
      className: "flex flex-col gap-1 md:gap-2 h-full",
      children: [
        /* @__PURE__ */ jsxs2("div", {
          className: "flex flex-1 gap-1 md:gap-2",
          children: [
            /* @__PURE__ */ jsx5(KeyBase, {
              w: 24,
              color: "slate-300",
              children: "Tab"
            }),
            keys[0].map(
              (key, i) => /* @__PURE__ */ jsx5(DragKey, {
                onDrag: () => drag(0, i),
                onDrop: () => drop(0, i),
                keyInfo: key,
                w: i == keys[0].length - 1 ? 24 : 14
              })
            )
          ]
        }),
        /* @__PURE__ */ jsxs2("div", {
          className: "flex flex-1 gap-1 md:gap-2",
          children: [
            /* @__PURE__ */ jsx5(KeyBase, {
              w: 28,
              color: "slate-300",
              children: "Caps"
            }),
            keys[1].map(
              (key, i) => /* @__PURE__ */ jsx5(DragKey, {
                onDrag: () => drag(1, i),
                onDrop: () => drop(1, i),
                keyInfo: key,
                w: 14
              })
            ),
            /* @__PURE__ */ jsx5(KeyBase, {
              w: 36,
              color: "slate-300",
              children: "Enter"
            })
          ]
        }),
        /* @__PURE__ */ jsxs2("div", {
          className: "flex  flex-1 gap-1 md:gap-2",
          children: [
            /* @__PURE__ */ jsx5(KeyBase, {
              w: 36,
              color: "slate-300",
              children: "Shift"
            }),
            keys[2].map(
              (key, i) => /* @__PURE__ */ jsx5(DragKey, {
                onDrag: () => drag(2, i),
                onDrop: () => drop(2, i),
                keyInfo: key,
                w: 14
              })
            ),
            /* @__PURE__ */ jsx5(KeyBase, {
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
export {
  Button,
  Keyboard
};
