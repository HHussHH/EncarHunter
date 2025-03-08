import "./RadioButton.scss";
import {FC, HTMLProps} from "react";

interface IRadioButtonProps extends HTMLProps<HTMLLIElement> {
  label?: string;
  isActive?: boolean;
}

export const RadioButton:FC<IRadioButtonProps> = ({label,isActive,...otherProps}) => {
  return (
	<li className="RadioButton" {...otherProps}>
		<div className={`RadioButton__radio ${isActive ?'RadioButton__radio-active':""}`}>
		  <div  className={`${isActive ?'RadioButton__radio-selected':""}`}/>
		</div>
	  <label  className={`RadioButton__label ${isActive ?'RadioButton__label-active':""}`}>
		{label}
	  </label>
	</li>
  );
};

