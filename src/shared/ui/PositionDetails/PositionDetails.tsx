import "./PositionDetails.scss";
import {FC} from "react";

interface IPositionDetailsProps {
  children: string;
}

export const PositionDetails:FC<IPositionDetailsProps> = ({children}) => {
  return (
	<li className="PositionDetails">
	  {children}
	</li>
  );
};

