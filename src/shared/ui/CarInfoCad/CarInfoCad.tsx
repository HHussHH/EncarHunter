import "./CarInfoCad.scss";
import {FC, Fragment, HTMLProps} from "react";
import {PositionDetails} from "@/shared/ui";
import placeholder from "@/shared/assets/CarsList/CardPlaceHolder.png"
interface ICarInfoCadProps extends HTMLProps<HTMLDivElement>  {
  price:number;
  mileage:string;
  engine_capacity:string;
  drive:string;
  production:string;
}

export const CarInfoCad:FC<ICarInfoCadProps> = (props) => {
  const {price,mileage,engine_capacity,drive,production,...otherProps} = props

  const details = [production,mileage,engine_capacity,drive]

  return (
	<div className="CarInfoCad" {...otherProps}>
		<div className="CarInfoCad__body">
		 <div className="CarInfoCad__image">
		   <img src={placeholder} alt={'PlaceHolder.png'}/>
		 </div>
		<div className="CarInfoCad__content">
		  <h2 className="CarInfoCad__title">
			Hyundai Palisade Calligraphy
		  </h2>
		  <span className="CarInfoCad__price">{price.toLocaleString("ru-RU")} руб</span>
		  {details.length > 0 && <ul className="CarInfoCad__details">
			{
			  details.map((opt) => (
				<Fragment key={opt}>
				  <PositionDetails>{opt}</PositionDetails>
				</Fragment>
			  ))
			}
					</ul>}
		</div>
		</div>
	</div>
  );
};

