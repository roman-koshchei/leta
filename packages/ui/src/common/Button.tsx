import * as React from "react";
import { Hand } from "models"

interface ButtonProps {
  text: string
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <div className="rounded-md bg-slate-400 p-3">
      {text}
    </div>
  );
};
