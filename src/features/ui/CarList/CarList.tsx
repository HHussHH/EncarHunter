import "./CarList.scss";
import {FC, memo, ReactNode, useCallback, useMemo} from "react";
import { useAppSelector } from "@/shared/api/types/redux.type.ts";
import { CarInfoCard } from "@/shared/ui";
import { useNavigate} from "react-router-dom";

interface ICarListProps {
  children?: ReactNode;
}

export const CarList: FC<ICarListProps> = memo(() => {
  const { cars } = useAppSelector(state => state.cars);
  const navigate = useNavigate();

  const handleClick = useCallback(
	(id: string) => {
	  const path = localStorage.getItem('initialPath_encar')
	  navigate(`${path}/${id}`);
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
	<article className="CarList">
	  {carsList}
	</article>
  );
});