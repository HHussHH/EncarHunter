import "./DetailsPage.scss";
import {FC, Fragment, ReactNode, useEffect, useRef, useState} from "react";
import {useAppSelector} from "@/shared/api/types/redux.type.ts";
import {Button, CarInfo, PositionDetails} from "@/shared/ui";
import {useNavigate, useParams} from "react-router-dom";
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
   const navigate = useNavigate()
   const [isVisible, setIsVisible] = useState(false);
   const elementRef = useRef<HTMLDivElement | null>(null);
   useEffect(() => {
	 const observer = new IntersectionObserver(
	   ([entry]) => {
		 if (entry.isIntersecting) {
		   // Код, который отрабатывает, когда элемент становится видимым
		   setIsVisible(true);
		 } else {
		   // Код, если элемент скрыт
		   setIsVisible(false);
		 }
	   },
	   { threshold: 0.25 } // Настройка: когда хотя бы 25% блока в области видимости
	 );

	 if (elementRef.current) {
	   observer.observe(elementRef.current);
	 }

	 // Очистка при размонтировании компонента
	 return () => {
	   if (elementRef.current) {
		 observer.unobserve(elementRef.current);
	   }
	 };
   }, []);

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
		  <div className='DetailsPage__btns' ref={elementRef}>
			<button>Загрузить историю автомобиля в Корее</button>
			<button>Проверить это объявление на ENCAR</button>
		  </div>
		  <div className='DetailsPage__CarSchema'>
			<h1 className='DetailsPage__CarSchema__title'>Состояние кузова:</h1>
			<img src={CarSchema} alt={'CarSchema.png'}/>
		  </div>
		  {
			isVisible &&  <div className="DetailsPage__back" >
							<Button size={"big"} theme={"blue"} onClick={() => navigate("/cars")}>
								Вернуться к объявлениям
							</Button>
						</div>
		  }
			</div>
</div>
	 );
};

export default DetailsPage;

