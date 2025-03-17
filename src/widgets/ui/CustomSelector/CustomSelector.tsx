import "./CustomSelector.scss";
import {FC, ReactNode, useState} from "react";
import {CustomSelectorList} from "@/features/ui";
import {Button} from "@/shared/ui";


interface ICustomSelectorProps {
  children?: ReactNode
  title:string,
  isMulti?:boolean,
  icon: ReactNode
  type:string
  options: string[]
  value: string | string[];
  multi?:boolean,
  changeHandler: (value: string | string[]) => void,
  selected?: boolean,
}

export const CustomSelector:FC<ICustomSelectorProps> = ({changeHandler,selected = false,value,isMulti,title,icon,type,options}:ICustomSelectorProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () =>{
	setIsOpen(prev => !prev)
  }

  return (
	<>
	  <div className={`CustomSelector ${selected ?  "CustomSelector-selected" : ""}`} onClick={toggleIsOpen}>
		{window.innerWidth > 450 && icon}
		{
		  window.innerWidth > 450 ? <div className='CustomSelector__desktop'>
			<div className="CustomSelector__header">
			  <div className="CustomSelector__type">{type}</div>
			</div>
			<h1 className={`CustomSelector__title ${Array.isArray(title) ? 'CustomSelector-mini' : ''}`}>
			  {!Array.isArray(value) ? value : value.length > 2 ? `${value[0]}, ${value[1]} (${value.length - 2})` : value.join(", ")}
			</h1>
		  </div> : <>
			<div className="CustomSelector__header">
			  {icon}
			  <div className="CustomSelector__type">{type}</div>
			</div>
			<h1 className={`CustomSelector__title ${Array.isArray(title) ? 'CustomSelector-mini' : ''}`}>
			  {!Array.isArray(value) ? value : value.length > 2 ? `${value[0]}, ${value[1]} (${value.length - 2})` : value.join(", ")}
			</h1>
		  </>
		}

	  </div>
	  {isOpen && <CustomSelectorList
				value={value}
				multi={isMulti}
				onChange={changeHandler}
				title={title}
				options={options}>
				<Button onClick={toggleIsOpen} size="big" theme="blue">
					Применить
				</Button>
			</CustomSelectorList>}
	</>
  );
};

