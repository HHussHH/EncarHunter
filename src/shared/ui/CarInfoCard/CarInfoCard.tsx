import "./CarInfoCard.scss";
import { FC, Fragment, HTMLProps, useEffect, useState } from "react";
import { PositionDetails } from "@/shared/ui";
import { useAppDispatch, useAppSelector } from "@/shared/api/types/redux.type.ts";
import { changeCarPhoto, changeLoadStatus } from "@/entities/cars/api/CarsSlice.ts";
import { useLazyGetCarPhotosWithIdQuery } from "@/entities/cars/api/CarsApi.ts";

interface ICarInfoCardProps extends HTMLProps<HTMLDivElement> {
  price: number | null;
  mileage: string | null;
  engine_capacity: string | null;
  drive: string | null;
  production: string | null;
  car_title: string | null;
  carId: number | null;
}

export const CarInfoCard: FC<ICarInfoCardProps> = (props) => {
  const { price, mileage, car_title, carId, engine_capacity, drive, production, ...otherProps } = props;
  const dispatch = useAppDispatch();
  const car = useAppSelector(state => state.cars.cars.find(car => car.id === carId));

  const [load, setLoad] = useState<boolean>(false);
  const [photoSrc, setPhotoSrc] = useState<string | null>(car?.imgSrc || null);
  const [getPhoto] = useLazyGetCarPhotosWithIdQuery();

  useEffect(() => {
	if (!carId) return; // Если нет ID, выходим

	if (car?.imgSrc) {
	  setPhotoSrc(car.imgSrc); // Если фото уже есть в редаксе, берем оттуда
	  return;
	}

	getPhoto({ id: carId }).then((response) => {
	  if (response.data?.main) {
		const imgSrc = `data:image/png;base64,${response.data.main}`;
		setPhotoSrc(imgSrc);
		dispatch(changeCarPhoto({ carId, src: imgSrc }));
	  }
	});
  }, [carId, car?.imgSrc, dispatch, getPhoto]);

  useEffect(() => {
	if (load && carId) {
	  const timer = setTimeout(() => {
		dispatch(changeLoadStatus({ status: true, carId }));
	  }, 600);
	  return () => clearTimeout(timer);
	}
  }, [load, carId, dispatch]);

  return (
	<article className="CarInfoCard" {...otherProps}>
	  <div className="CarInfoCard__body">
		<header className="CarInfoCard__image">
		  <div className="CarInfoCard__image__placeholder">
			{photoSrc && (
			  <img
				src={photoSrc}
				alt="car"
				className={load && !car?.carLoading ? "CarInfoCard__load" : ""}
				onLoad={() => setLoad(true)}
			  />
			)}
		  </div>
		</header>
		<footer className="CarInfoCard__content">
		  {car_title ? (
			<h2 className="CarInfoCard__title">{car_title}</h2>
		  ) : (
			<h2 className="CarInfoCard__title-placeholder" />
		  )}
		  {price ? (
			<span className="CarInfoCard__price">{price.toLocaleString("ru-RU")} ₩</span>
		  ) : (
			<h2 className="CarInfoCard__price-placeholder" />
		  )}
		  <ul className="CarInfoCard__details">
			{[production, mileage, engine_capacity, drive].map((opt, index) => (
			  <Fragment key={index}>
				<PositionDetails>{opt || ""}</PositionDetails>
			  </Fragment>
			))}
		  </ul>
		</footer>
	  </div>
	</article>
  );
};


