import { FC } from "react";


export const Button: FC = ({ children }) => {
  return (
    <div className="rounded-md bg-blue-400 text-white px-3 py-1 w-fit select-none">
      {children}
    </div>
  );
};
