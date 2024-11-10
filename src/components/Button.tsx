import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  small?: boolean;
}

const Button: React.FC<Props> = ({ children, small, ...rest }) => {
  const variant = small ? "px-4 py-3" : "px-7 py-5";
  return (
    <button
      {...rest}
      className={`text-green_700 border-green_700 border-1 font-mono text-sm rounded-md transition duration-500 ease-in-out hover:shadow-xsm hover:shadow-green_700 ${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;
