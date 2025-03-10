import "./Button.scss";
import {ButtonHTMLAttributes, FC, ReactNode, useRef} from "react";

type ButtonSize = "big" | "small" | "base" | "medium";
type ButtonTheme = "rounded" | "base" | "inline" | "blue" | "green" | "greenOp" | "yellow";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size:ButtonSize,
  theme:ButtonTheme
  icon?: ReactNode,
  cls?:string;
}

export const Button:FC<IButtonProps> = (props) => {
  const { children,cls, theme = "base", size = "base", icon, ...otherProps } = props;
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
	<button  ref={buttonRef} className={`Button Button__theme-${theme} Button__size-${size} ${cls}`} {...otherProps}>
	  {icon} <span>{children}</span>
	</button>
  );
};

