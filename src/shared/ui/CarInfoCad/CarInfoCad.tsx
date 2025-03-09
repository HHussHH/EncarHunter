import "./CarInfoCad.scss";
import {FC, Fragment, HTMLProps, useState} from "react";
import {PositionDetails} from "@/shared/ui";
import carImg from "@/shared/assets/CarsList/CardPlaceHolder.png"
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
	const [load,setLoad] = useState<boolean>(false);
  return (
	<div className="CarInfoCad" {...otherProps}>
		<div className="CarInfoCad__body">
		 <div className="CarInfoCad__image">
		   {
			 load ? <img onLoad={() => setLoad(true)} src={carImg} alt={'carImg.png'}/> : <div className={"CarInfoCad__image__placeholder"}/>
		   }

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

