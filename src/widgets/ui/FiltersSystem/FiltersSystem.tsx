import "./FiltersSystem.scss";
import {FC, ReactNode, useEffect, useState} from "react";
import {FiltersSystemInput} from "@/shared/ui/FiltersSystemInput/FiltersSystemInput.tsx";
import {useAppDispatch, useAppSelector} from "@/shared/api/types/redux.type.ts";
import {useLazyGetAllFiltersQuery} from "@/entities/Filters/api/FiltersApi.ts";
import {updateFilter} from "@/entities/cars/api/CarsSlice.ts";

interface IFiltersSystemProps {
  children?: ReactNode
}

export const FiltersSystem:FC<IFiltersSystemProps> = () => {
  const [isWide, setIsWide] = useState(window.innerWidth <= 450);
	const CARS_FILTERS = useAppSelector(state => state.cars.filters)
	const FILTERS = useAppSelector(state => state.filters.filters)
  useEffect(() => {
	const handleResize = () => setIsWide(window.innerWidth <= 450);
	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
  }, []);


	const valueViews = (value: string, placeholder:string) => {
	  if(value){
		const arr = value.split(", ")
		return arr.length > 1 ? `${arr[0]}, +${arr.length - 1}` : arr[0]
	  }else{
		return placeholder
	  }
	}

  return (
	<article className="FiltersSystem">
		<article className="FiltersSystem__list">
		  {
			isWide &&  <FiltersSystemInput>
							🚘 Все фильтры
						</FiltersSystemInput>
		  }
		  <div className={'FiltersSystem__list__el'}>
			<FiltersSystemInput path={'filters.car.mark'}
								title={"Выберите марку"}
								isMulti={true}
								isActive={!!CARS_FILTERS.car.mark}
								data={{variables:CARS_FILTERS.car.mark,options:FILTERS.car.mark}}>
			  {valueViews(CARS_FILTERS.car.mark,"Марка")}
			</FiltersSystemInput>
		  </div>
		  <div className={'FiltersSystem__list__el'}>
		  <FiltersSystemInput
			path={'filters.car.model'}
			title={"Выберите модели"}
			isMulti={true}
			isActive={!!CARS_FILTERS.car.model}
			data={{variables:CARS_FILTERS.car.model,options:FILTERS.car.model}}>
			{valueViews(CARS_FILTERS.car.model,"Модель")}
		  </FiltersSystemInput>
		  </div>
		  <div className={'FiltersSystem__list__el'}>
		  <FiltersSystemInput path={'filters.car.model'}
							  title={"Выберите тип топлива"}
							  isMulti={true}
							  isActive={!!CARS_FILTERS.car.model}
							  data={{variables:CARS_FILTERS.car.model,options:CARS_FILTERS.car.model.split(", ")}}>
			{CARS_FILTERS.car.model ? CARS_FILTERS.car.model : "Тип топлива" }
		  </FiltersSystemInput>
		  </div>
		  <div className={'FiltersSystem__list__el'}>
		  <FiltersSystemInput path={'filters.car.model'}
							  title={"Выберите цены"}
							  isMulti={true}
							  isActive={!!CARS_FILTERS.car.model}
							  data={{variables:CARS_FILTERS.car.model,options:['В1',"В2","В3","В4","В4"]}}
							  multi={{variables:['Цена от, ₽',"Цена до, ₽"]}}/>
		  </div>
		</article>
	  	<footer className={'FiltersSystem__footer'}>
		  <button className={'FiltersSystem__footer__show'}>Развернуть все параметры</button>
		  <section className={'FiltersSystem__footer__buttons'} >
			<button className={'FiltersSystem__footer__button'}>Сбросить</button>
			<button className={'FiltersSystem__footer__button'}>Показать 2 322 объявлений</button>
		  </section>
		</footer>
	</article>
  );
};

