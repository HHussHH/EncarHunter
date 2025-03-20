import "./CarInfoCard.scss";
import { FC, Fragment, HTMLProps, memo, useEffect, useState } from "react";
import { PositionDetails } from "@/shared/ui";
import carImg from "@/shared/assets/CarsList/CardPlaceHolder.png";
import { useAppDispatch, useAppSelector } from "@/shared/api/types/redux.type.ts";
import { changeLoadStatus } from "@/entities/cars/api/CarsSlice.ts";
import { useLazyGetCarPhotosWithIdQuery } from "@/entities/cars/api/CarsApi.ts";

interface ICarInfoCardProps extends HTMLProps<HTMLDivElement> {
  price: number;
  mileage: string;
  engine_capacity: string;
  drive: string;
  production: string;
  title: string;
  carId: number;
}

export const CarInfoCard: FC<ICarInfoCardProps> = memo((props) => {
  const { price, mileage, title, carId, engine_capacity, drive, production, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const { carsLoading } = useAppSelector((state) => state.cars);
  const [load, setLoad] = useState<boolean>(false);
  const [getPhoto, { data, isSuccess }] = useLazyGetCarPhotosWithIdQuery();

  useEffect(() => {
	if (carId) {
	  getPhoto({ id: carId }).then((data) =>{
		console.log(data!.data)
	  });
	}
  }, []);

  useEffect(() => {
	if (load) {
	  const interval = setTimeout(() => {
		dispatch(changeLoadStatus(true));
	  }, 600);
	  return () => clearInterval(interval);
	}
  }, [load]);


  return (
	<article className="CarInfoCard" {...otherProps}>
	  <div className="CarInfoCard__body">
		<header className="CarInfoCard__image">
		  <div className="CarInfoCard__image__placeholder">
			{
			  isSuccess && 	<img
								src={`data:image/png;base64,${data.main}`}
								alt="car"
								className={`${load && !carsLoading ? "CarInfoCard__load" : ""}`}
								onLoad={() => setLoad(true)}
								style={{ display: "block" }}
			  />
			}
		  </div>
		</header>
		<footer className="CarInfoCard__content">
		  <h2 className="CarInfoCard__title">{title}</h2>
		  <span className="CarInfoCard__price">{price.toLocaleString("ru-RU")} ₩</span>
		  <ul className="CarInfoCard__details">
			{[production, mileage, engine_capacity, drive].map((opt) => (
			  <Fragment key={opt}>
				<PositionDetails>{opt}</PositionDetails>
			  </Fragment>
			))}
		  </ul>
		</footer>
	  </div>
	</article>
  );
});