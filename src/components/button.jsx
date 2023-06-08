import { Children } from "react";

const Button = ({ type, Children, handleClick, className }) => {
  return (
    <button type={type} onClick={handleClick} className={className}>
      {Children}
    </button>
  );
};

export default Button;
