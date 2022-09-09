// src/components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md "
  });
};

// src/components/layout/Title.tsx
import Head from "next/head";
import { jsx as jsx2 } from "react/jsx-runtime";
var Title = ({ children }) => {
  return /* @__PURE__ */ jsx2(Head, {
    children: /* @__PURE__ */ jsx2("title", {
      children
    })
  });
};
export {
  Button,
  Title
};
