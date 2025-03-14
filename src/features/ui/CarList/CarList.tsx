import "./CarList.scss";
import {FC, Fragment, memo, ReactNode, useCallback, useMemo} from "react";
import { useAppSelector } from "@/shared/api/types/redux.type.ts";
import { CarInfoCad } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

interface ICarListProps {
  children?: ReactNode;
  title: string;
}

export const CarList: FC<ICarListProps> = memo(({ title }) => {
  const { cars } = useAppSelector(state => state.cars);
  const navigate = useNavigate();

  const handleCarClick = useCallback(
	(id: string) => {
	  navigate(`${id}`);
	},
	[navigate] // зависимость от navigate
  );
  const carsList = useMemo(() => {
	return cars.map((item) => (
	  <CarInfoCad
		key={item.id}
		onClick={() => handleCarClick(item.id)}
		mileage={"83 961 км"}
		price={3031968}
		engine_capacity={"2 199 куб. см"}
		drive={"2WD"}
		production={"2020.12"}
	  />
	));
  }, [cars]); // Добавил зависимость от cars
  return (
	<div className="CarList">
	  <h1 className="CarList__title">{title}</h1>
	  {carsList}
	</div>
  );
});