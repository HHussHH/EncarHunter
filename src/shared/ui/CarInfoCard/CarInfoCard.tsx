import "./CarInfoCard.scss";
import { FC, Fragment, HTMLProps, memo, useEffect, useState } from "react";
import { PositionDetails } from "@/shared/ui";
import carImg from "@/shared/assets/CarsList/CardPlaceHolder.png";

interface ICarInfoCardProps extends HTMLProps<HTMLDivElement> {
  price: number;
  mileage: string;
  engine_capacity: string;
  drive: string;
  production: string;
}

export const CarInfoCard: FC<ICarInfoCardProps> = memo((props) => {
  const { price, mileage, engine_capacity, drive, production, ...otherProps } = props;
  const details = [production, mileage, engine_capacity, drive];

  const [loaded, setLoaded] = useState<boolean>(false); // Для отслеживания загрузки изображения
  const [animationPlayed, setAnimationPlayed] = useState<boolean>(false); // Для отслеживания проигрывания анимации

  useEffect(() => {
	if (!animationPlayed) {
	  setAnimationPlayed(true);
	}
  }, [animationPlayed]);

  return (
	<div className={`CarInfoCad ${animationPlayed ? 'CarInfoCad__load' : ''}`} {...otherProps}>
	  <div className="CarInfoCad__body">
		<div className="CarInfoCad__image">
		  {!loaded && <div className="CarInfoCad__image__placeholder" />}
		  <img
			src={carImg}
			alt="car"
			onLoad={() => setLoaded(true)}
			style={{ display: loaded ? "block" : "none" }}
		  />
		</div>
		<div className="CarInfoCad__content">
		  <h2 className="CarInfoCad__title">
			Hyundai Palisade Calligraphy
		  </h2>
		  <span className="CarInfoCad__price">{price.toLocaleString("ru-RU")} руб</span>
		  {details.length > 0 && (
			<ul className="CarInfoCad__details">
			  {details.map((opt) => (
				<Fragment key={opt}>
				  <PositionDetails>{opt}</PositionDetails>
				</Fragment>
			  ))}
			</ul>
		  )}
		</div>
	  </div>
	</div>
  );
});