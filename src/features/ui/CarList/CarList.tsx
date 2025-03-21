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


  return (
	<article className="CarList">
	  {
		(cars.length > 0) ? cars.map((item) => (
		  <CarInfoCard
			car_title={`${item.brand} ${item.model}`}
			key={item.id}
			carId={item.id}
			onClick={() => handleClick(item.id.toString())}
			mileage={`${item.milleage} км`}
			price={item.price}
			engine_capacity={"2 199 куб. см"}
			drive={`${item.badge.split(" ")[0] ? item.badge.split(" ")[0] : ""}`}
			production={item.form_year.toString()}
		  />
		)) :

		  [1,2,3,4,5,6].map((plch) => <CarInfoCard
			car_title={null}
			key={plch}
			carId={null}
			onClick={() => {}}
			mileage={null}
			price={null}
			engine_capacity={null}
			drive={null}
			production={null}
		  />)
	  }
	</article>
  );
});