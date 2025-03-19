import "./CustomSelector.scss";
import {FC, ReactNode, useEffect, useState} from "react";
import {CustomSelectorList} from "@/features/ui";
import {Button} from "@/shared/ui";


interface ICustomSelectorProps {
  children?: ReactNode
  title:string,
  isMulti?:boolean,
  icon: ReactNode
  type:string
  options: string[]
  value: string;
  multi?:boolean,
  changeHandler: (value: string | string[]) => void,
  selected?: boolean,
}

export const CustomSelector:FC<ICustomSelectorProps> = ({selected = false,value,isMulti,title,icon,type,options}:ICustomSelectorProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () =>{
	setIsOpen(prev => !prev)
  }
  const [isWide, setIsWide] = useState(window.innerWidth > 450);

  useEffect(() => {
	const handleResize = () => setIsWide(window.innerWidth > 450);

	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
	<>
	  <div className={`CustomSelector ${selected ?  "CustomSelector-selected" : ""}`} onClick={toggleIsOpen}>
		{isWide && icon}
		{
		  isWide ? <div className='CustomSelector__desktop'>
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
				title={title}
				options={options}>
				<Button onClick={toggleIsOpen} size="big" theme="blue">
					Применить
				</Button>
			</CustomSelectorList>}
	</>
  );
};

