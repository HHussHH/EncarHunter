import "./NavElem.scss";
import {FC, ReactNode} from "react";
import {NavLink} from "react-router-dom";

interface INavElemProps {
  children: ReactNode
  path:string
  label:string
}

export const NavElem:FC<INavElemProps> = ({path,label,children}) => {
  return (
	<NavLink  className={({ isActive }) =>
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

