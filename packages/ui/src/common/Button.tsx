import { FC } from "react";
import { Hand } from "models"

interface ButtonProps {
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <div className="rounded-md bg-blue-400 text-white px-3 py-1">
      {children}
    </div>
  );
};
