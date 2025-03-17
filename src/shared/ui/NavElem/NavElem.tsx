import "./NavElem.scss";
import {FC, HTMLProps, ReactNode} from "react";
import {NavLink} from "react-router-dom";

interface INavElemProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode
  path:string
  label:string
}

export const NavElem:FC<INavElemProps> = ({path,label,children,onClick}) => {

  return (
	<NavLink onClick={onClick}  className={({ isActive }) =>
	  isActive
		? "NavElem NavElem__active"
		:  "NavElem"
	} to={`/${path}`}>
	 <div className={`NavElem__content`}>
	   {children}
	   <label>{label}</label>
	 </div>
	</NavLink>
  );
};

