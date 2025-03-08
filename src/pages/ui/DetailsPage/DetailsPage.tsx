import "./DetailsPage.scss";
import {FC, Fragment, ReactNode} from "react";
import {useAppSelector} from "@/shared/api/types/redux.type.ts";
import {CarInfo, PositionDetails} from "@/shared/ui";
import { useParams} from "react-router-dom";
import {CarDetailsRule} from "@/shared/ui/CarDetailsRule/CarDetailsRule.tsx";
import CarSchema from "@/shared/assets/DetailsCard/CarShema.png"
import LeftArrow from "@/shared/assets/DetailsCard/LeftArrow.svg?react"
import RightArrow from "@/shared/assets/DetailsCard/RightArrow.svg?react"
interface IDetailsPageProps{
  children?: ReactNode
}

 const DetailsPage:FC<IDetailsPageProps> = (
 ) => {
  const {id }= useParams()
	 const currentCarInfo = useAppSelector(state => state.cars.cars.find(item => item.id === Number(id)))
   const details = ["2020.12","83 961 км","2 199 куб. см","2WD"]

   return (
	   <div className="DetailsPage">
		<div className="DetailsPage__body">
		  <div className="DetailsPage__info">
			<h1 className="DetailsPage__car">BMW 8-series M850i xDrive Luxury Gran Coupe</h1>
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
			<div className="DetailsPage__slider">
				<div className={'DetailsPage__slider__arrow DetailsPage__slider__arrow-l'}>
				  <LeftArrow/>
				</div>
				<div className={'DetailsPage__slider__arrow DetailsPage__slider__arrow-r'}>
				  <RightArrow/>
				</div>
			  Slider. Будет скоро =)
			</div>
 				 <CarInfo/>
		  <CarDetailsRule/>
		  <div className='DetailsPage__CarSchema'>
			<img src={CarSchema} alt={'CarSchema.png'}/>
		  </div>
		  <div className='DetailsPage__btns'>
			<button>Загрузить историю автомобиля в Корее</button>
			<button>Проверить это объявление на ENCAR</button>
		  </div>
			</div>
</div>
	 );
};

export default DetailsPage;

