// src/keyboard/KeyboardBase.tsx
import { jsx } from "react/jsx-runtime";
var KeyboardBase = ({ children }) => {
  return /* @__PURE__ */ jsx("div", {
    className: `aspect-[1200/300] text-sm md:text-base`,
    children: /* @__PURE__ */ jsx("div", {
      className: "flex flex-col gap-1 md:gap-2 h-full",
      children
    })
  });
};

// src/keyboard/keys/Key.tsx
import { FingerColors } from "models";

// src/keyboard/keys/KeyBase.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var KeyBase = ({ children, w, bg, cursor = "cursor-default", ...rest }) => {
  return /* @__PURE__ */ jsx2("div", {
    className: `flex-auto rounded-md p-0.5 md:p-1 ${w} ${bg} ${cursor}`,
    ...rest,
    children: /* @__PURE__ */ jsx2("div", {
      className: "flex h-full justify-center items-center select-none",
      children
    })
  });
};

// src/keyboard/keys/Key.tsx
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
var Key = ({ keyInfo, w, onClick, onDrag, onDragOver, onDrop, draggable, ...rest }) => {
  const bgColor = keyInfo.active ? FingerColors.get(keyInfo.finger) : "bg-slate-300";
  return /* @__PURE__ */ jsx3(KeyBase, {
    w,
    bg: bgColor ?? "",
    onDrag,
    onDrop,
    onDragOver,
    onClick,
    draggable,
    ...rest,
    children: keyInfo.primary == keyInfo.shift.toLowerCase() ? keyInfo.shift : /* @__PURE__ */ jsx3(FullInfo, {
      keyInfo
    })
  });
};

// src/keyboard/rows/Row.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Row = ({ children }) => {
  return /* @__PURE__ */ jsx4("div", {
    className: "flex flex-1 gap-1 md:gap-2",
    children
  });
};

// src/keyboard/Keyboard.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Keyboard = ({ keys, keyDrag: onKeyDrag, keyDrop: onKeyDrop, onKeyDragOver, keyClick }) => {
  const InKey = onKeyDrag != void 0 && onKeyDrop != void 0 ? ({ keyInfo, w, row, col }) => {
    return keyInfo.active ? /* @__PURE__ */ jsx5(Key, {
      keyInfo,
      w,
      onDrag: () => onKeyDrag(row, col),
      onDrop: () => onKeyDrop(row, col),
      draggable: true,
      onDragOver: onKeyDragOver,
      onClick: keyClick ? () => keyClick(row, col) : void 0
    }) : /* @__PURE__ */ jsx5(Key, {
      keyInfo,
      w
    });
  } : ({ keyInfo, w }) => /* @__PURE__ */ jsx5(Key, {
    keyInfo,
    w
  });
  return /* @__PURE__ */ jsxs2(KeyboardBase, {
    children: [
      /* @__PURE__ */ jsxs2(Row, {
        children: [
          keys[0].map(
            (key, col) => /* @__PURE__ */ jsx5(InKey, {
              col,
              row: 0,
              keyInfo: key,
              w: "w-14"
            }, col)
          ),
          /* @__PURE__ */ jsx5(KeyBase, {
            w: "w-32",
            bg: "bg-slate-300",
            children: "Backspace"
          })
        ]
      }),
      /* @__PURE__ */ jsxs2(Row, {
        children: [
          /* @__PURE__ */ jsx5(KeyBase, {
            w: "w-24",
            bg: "bg-slate-300",
            children: "Tab"
          }),
          keys[1].map(
            (key, col) => /* @__PURE__ */ jsx5(InKey, {
              col,
              row: 1,
              keyInfo: key,
              w: col == keys[0].length - 1 ? "w-24" : "w-14"
            }, col)
          )
        ]
      }),
      /* @__PURE__ */ jsxs2(Row, {
        children: [
          /* @__PURE__ */ jsx5(KeyBase, {
            w: "w-28",
            bg: "bg-slate-300",
            children: "Caps"
          }),
          keys[2].map(
            (key, col) => /* @__PURE__ */ jsx5(InKey, {
              col,
              row: 2,
              keyInfo: key,
              w: "w-14"
            }, col)
          ),
          /* @__PURE__ */ jsx5(KeyBase, {
            w: "w-36",
            bg: "bg-slate-300",
            children: "Enter"
          })
        ]
      }),
      /* @__PURE__ */ jsxs2(Row, {
        children: [
          /* @__PURE__ */ jsx5(KeyBase, {
            w: "w-36",
            bg: "bg-slate-300",
            children: "Shift"
          }),
          keys[3].map(
            (key, col) => /* @__PURE__ */ jsx5(InKey, {
              col,
              row: 3,
              keyInfo: key,
              w: "w-14"
            }, col)
          ),
          /* @__PURE__ */ jsx5(KeyBase, {
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
import { useState } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var DragKeyboard = ({ keys, setKeys, keyClick }) => {
  const [draged, setDraged] = useState({
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
  return /* @__PURE__ */ jsx6(Keyboard, {
    keys,
    keyDrag: drag,
    keyDrop: drop,
    onKeyDragOver: dragOver,
    keyClick
  });
};

// src/common/Button.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var Button = ({ children }) => {
  return /* @__PURE__ */ jsx7("div", {
    className: "rounded-md bg-blue-400 text-white px-3 py-1 w-fit select-none",
    children
  });
};

// src/common/Input.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var Input = ({ val, onChange }) => {
  return /* @__PURE__ */ jsx8("input", {
    className: "bg-gray-100 border outline-none border-gray-100\r\n      text-gray-900 text-sm rounded-md p-2",
    value: val,
    onChange
  });
};
export {
  Button,
  DragKeyboard,
  Input,
  Keyboard
};
