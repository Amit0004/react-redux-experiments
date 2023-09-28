import React from "react";
import classes from "./Button.module.css";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
  height?: string;
}

const Button = ({ children, onClick, width, height }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classes.primary}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
};

export default Button;
