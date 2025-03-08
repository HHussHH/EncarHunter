import "./PreferencesSelector.scss";
import {FC, ReactNode, useState} from "react";
import {CustomSelectorList} from "@/features/ui";
import {Button} from "@/shared/ui";

interface IPreferencesSelectorProps {
  children?: ReactNode,
  label?:string,
  title:string,
  options: string[]
  description?:string,
  placeholder:string,
  color?:string,
  isMulti?:boolean,
  isWhite?:boolean,
  isPlaceholder:boolean,
  value: string | string[]; // 🔹 Добавил value
  changeHandler: (value: string | string[]) => void,
}

export const PreferencesSelector:FC<IPreferencesSelectorProps> = ({value,isPlaceholder, isMulti = false,color,isWhite=false,placeholder,label,title,options,changeHandler,description}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () =>{
	setIsOpen(prev => !prev)
  }
  const renderValue = () => {
	if (!value || (Array.isArray(value) && value.length === 0)) return <PlaceHolder />;
	return (
	  <label className={`PreferencesSelector__value ${color ? `PreferencesSelector-${color}${isWhite ? "-isWhite" : ""}` : ""}`}>
		{Array.isArray(value) ? value.join(", ") : value}
	  </label>
	);
  };
  const PlaceHolder = ()  => <label className={`PreferencesSelector__placeholder ${color ? `PreferencesSelector-${color}` : ''}`}>{placeholder}</label>
  return (
	<>
	  <div className="PreferencesSelector" onClick={toggleIsOpen}>
		{label && <h2 className="PreferencesSelector__title">{label}</h2>}
		<div className={`PreferencesSelector__field ${color ? `PreferencesSelector-bg-${color} ` : ''}`}>
		  { isPlaceholder ? <PlaceHolder/> : renderValue()}
		  <div className={`PreferencesSelector__arrow ${color ? `PreferencesSelector-${color}` : ''}`}/>
		</div>
		{description && <p className="PreferencesSelector__description">{description}</p>}
	  </div>
	  {isOpen && <CustomSelectorList
		value={value}
		multi={isMulti}
		onChange={changeHandler}
		title={title}
		options={options}>
				<Button onClick={toggleIsOpen} size="big" theme="green">
					Применить
				</Button>
			</CustomSelectorList>}
	</>
  );
};

