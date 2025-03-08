import "./MapSelector.scss";
import {FC, ReactNode} from "react";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "@/shared/api/types/redux.type.ts";

interface IMapSelectorProps {
  children?: ReactNode
}

export const MapSelector:FC<IMapSelectorProps> = () => {
  const address = useAppSelector(state => state.posted.address_name)
  return (
	<div className="MapSelector">
			<h2 className="MapSelector__title">Адрес объекта</h2>
	 		 <span className="MapSelector__address">{address}</span>
	  	  <NavLink to={"map"} className={"MapSelector__link"}>
		Выбрать точку на карте
	  </NavLink>
		</div>
  );
};

