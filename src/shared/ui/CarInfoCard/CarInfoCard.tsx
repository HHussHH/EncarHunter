import "./CarInfoCard.scss";
import { FC, Fragment, HTMLProps, memo, useEffect, useState } from "react";
import { PositionDetails } from "@/shared/ui";
import carImg from "@/shared/assets/CarsList/CardPlaceHolder.png";
import { useAppDispatch, useAppSelector } from "@/shared/api/types/redux.type.ts";
import { changeLoadStatus } from "@/entities/cars/api/CarsSlice.ts";

interface ICarInfoCardProps extends HTMLProps<HTMLDivElement> {
  price: number;
  mileage: string;
  engine_capacity: string;
  drive: string;
  production: string;
}

export const CarInfoCard: FC<ICarInfoCardProps> = memo((props) => {
  const { price, mileage, engine_capacity, drive, production, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const { carsLoading } = useAppSelector((state) => state.cars);
  const [load, setLoad] = useState<boolean>(false)

  useEffect(() => {
	if(load){
	  setTimeout(() => {
		dispatch(changeLoadStatus(true))
	  },600)
	}
  }, [load]);

  return (
	<div className={`CarInfoCard`}
		 {...otherProps}>
	  <div className="CarInfoCard__body">
		<div className="CarInfoCard__image">
		  {!load &&  <div className="CarInfoCard__image__placeholder" />}
		  <img
			src={carImg}
			alt="car"
			className={`${load && !carsLoading ? "CarInfoCard__load" : ""}`}
			onLoad={() => {
			  console.log('work load')
			  setLoad(true)
			}}
			style={{ display: "block" }}
		  />
		</div>
		<div className="CarInfoCard__content">
		  <h2 className="CarInfoCard__title">Hyundai Palisade Calligraphy</h2>
		  <span className="CarInfoCard__price">{price.toLocaleString("ru-RU")} руб</span>
		  <ul className="CarInfoCard__details">
			{[production, mileage, engine_capacity, drive].map((opt) => (
			  <Fragment key={opt}>
				<PositionDetails>{opt}</PositionDetails>
			  </Fragment>
			))}
		  </ul>
		</div>
	  </div>
	</div>
  );
});