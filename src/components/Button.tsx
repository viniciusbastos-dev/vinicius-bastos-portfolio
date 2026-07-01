import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  small?: boolean;
}

const Button: React.FC<Props> = ({ children, small, ...rest }) => {
  const variant = small ? "px-5 py-2.5" : "px-7 py-4";
  return (
    <button
      {...rest}
      className={`text-neon border-neon/60 border font-mono text-sm rounded-full transition-all duration-300 ease-in-out hover:bg-neon hover:text-ink ${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;
