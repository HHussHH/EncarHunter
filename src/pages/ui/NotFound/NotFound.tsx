import "./NotFound.scss";
import {FC, ReactNode} from "react";

import NotFoundPng from  "@assets/NotFound/NotFound.png"
interface INotFoundProps {
  children?: ReactNode
}

export const NotFound:FC<INotFoundProps> = () => {
  return (
	<div className="NotFound">
		<img src={NotFoundPng} alt={"404"}/>
	</div>
  );
};

