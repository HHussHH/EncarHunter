import "./FiltersSystemInput.scss";
import {FC, useState} from "react";
import {CustomSelectorList} from "@/features/ui";
import {Button} from "@/shared/ui";

interface IFiltersSystemInputProps {
  children?: string;
  multi?:{
	variables: string[];
  };
  isMulti?: boolean;
  data?:{
	variables: string;
	options:string[];
  };
  title?:string;
  path?:string;
  isActive?:boolean;
}

export const FiltersSystemInput:FC<IFiltersSystemInputProps> = ({path,isMulti,title,data,isActive,children,multi}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleOpen = () => setIsOpen(prev=> !prev)


  return (
<>
  <article className={`CustomInput CustomInput-${isActive && "active"}`} onClick={toggleOpen}>
	{multi && <div className={'CustomInput-multi'}/>}
	{!multi && <label className="CustomInput__label">{children}</label>}
	{
	  multi && <div className={'CustomInput__labels'}>{	multi.variables.map((text) =>
		<label className="CustomInput__label">{text}</label>)}</div>

	}
  </article>
  {isOpen && <CustomSelectorList
		value={data!.variables}
		multi={isMulti}
		path={path!}
		title={title!}
		options={data!.options}>
		<Button onClick={toggleOpen} size="big" theme="blue">
			Применить
		</Button>
	</CustomSelectorList>}
</>
  );
};

