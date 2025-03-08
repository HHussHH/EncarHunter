import "./RadioButtonList.scss";
import {FC, Fragment, useState} from "react";
import {RadioButton} from "@/shared/ui/RadioButton/RadioButton.tsx";

interface IRadioButtonListProps {
  options: {
	label: string;
	value: number;
  }[];
  initiVal?:number | null;
}

export const RadioButtonList:FC<IRadioButtonListProps> = ({options,initiVal = 1}) => {
  const [selectedElement,setSelectedElement] = useState<number | null>(initiVal);

  return (
	  <ul className="RadioButtonList">
		{
		  options.map((item) => (
			<Fragment key={item.label}>
			  <RadioButton onClick={() => setSelectedElement(() => item.value)} isActive={item.value === selectedElement} label={item.label}/>
			</Fragment>
		  ))
		}
	  </ul>
  );
};

