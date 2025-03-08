import "./CarList.scss";
import {FC, Fragment, ReactNode} from "react";
import {useAppSelector} from "@/shared/api/types/redux.type.ts";
import {CarInfoCad} from "@/shared/ui";
import {useNavigate} from "react-router-dom";

interface ICarListProps {
  children?: ReactNode
  title: string
}

export const CarList:FC<ICarListProps> = ({title}) => {
  const {cars} = useAppSelector(state => state.cars)
  const navigate = useNavigate();
  return (
	<div className="CarList">
	  <h1 className="CarList__title">{title}</h1>
	  {cars.map((item) => (
		<Fragment key={item.id}>
		  <CarInfoCad onClick={() => navigate(`${item.id}`)} mileage={"83 961 км"} price={3031968} engine_capacity={"2 199 куб. см"} drive={"2WD"} production={"2020.12"} />
		</Fragment>
	  ))}
	</div>
  );
};

