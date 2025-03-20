import "./PositionDetails.scss";
import {FC, memo} from "react";

interface IPositionDetailsProps {
  children: string;
}

export const PositionDetails:FC<IPositionDetailsProps> = memo(({children}) => {
  return (
	<li className={`PositionDetails`}>
	  {children === "" && <div className={'PositionDetails__text-placeholder'}/>}
	  {children}
	</li>
  );
});

