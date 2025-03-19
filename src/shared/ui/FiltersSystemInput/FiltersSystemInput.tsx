import "./FiltersSystemInput.scss";
import {FC} from "react";

interface IFiltersSystemInputProps {
  children?: string;
  multi?:{
	variables: string[],
  };
}

export const FiltersSystemInput:FC<IFiltersSystemInputProps> = ({children,multi}) => {
  return (
	<article className={`CustomInput`}>
	  {multi && <div className={'CustomInput-multi'}/>}
	  {!multi && <label className="CustomInput__label">{children}</label>}
	  {
		multi && <div className={'CustomInput__labels'}>{	multi.variables.map((text) =>
		  <label className="CustomInput__label">{text}</label>)}</div>

	  }
	</article>
  );
};

