import { ReactNode } from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps): ReactNode => {
  const { className } = props;
  return <button className={className}></button>;
};

export default Button;
