import "./CarList.scss";
import {FC, Fragment, memo, ReactNode, useCallback, useMemo} from "react";
import { useAppSelector } from "@/shared/api/types/redux.type.ts";
import { CarInfoCard } from "@/shared/ui";
import {Link, useNavigate} from "react-router-dom";

interface ICarListProps {
  children?: ReactNode;
  title: string;
}

export const CarList: FC<ICarListProps> = memo(({ title }) => {
  const { cars } = useAppSelector(state => state.cars);
  const navigate = useNavigate();

  const handleClick = useCallback(
	(id: string) => {
	  navigate(`${id}`);
	},
	[navigate]
  );

  const carsList = useMemo(() => {
	return cars.map((item) => (
		<CarInfoCard
		  key={item.id}
		  onClick={() => handleClick(item.id)}
		  mileage={"83 961 км"}
		  price={3031968}
		  engine_capacity={"2 199 куб. см"}
		  drive={"2WD"}
		  production={"2020.12"}
		/>
	));
  }, [cars]);

  return (
	<div className="CarList">
	  <h1 className="CarList__title">{title}</h1>
	  {carsList}
	</div>
  );
});