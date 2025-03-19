import "./FiltersSystem.scss";
import {FC, ReactNode, useEffect, useState} from "react";
import {FiltersSystemInput} from "@/shared/ui/FiltersSystemInput/FiltersSystemInput.tsx";
import {useAppSelector} from "@/shared/api/types/redux.type.ts";

interface IFiltersSystemProps {
  children?: ReactNode
}

export const FiltersSystem:FC<IFiltersSystemProps> = () => {
  const [isWide, setIsWide] = useState(window.innerWidth <= 450);
	const CARS_FILTERS = useAppSelector(state => state.cars.filters)
  useEffect(() => {
	const handleResize = () => setIsWide(window.innerWidth <= 450);

	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
	<article className="FiltersSystem">
		<article className="FiltersSystem__list">
		  {
			isWide &&  <FiltersSystemInput>
							🚘 Все фильтры
						</FiltersSystemInput>
		  }
		  <FiltersSystemInput path={'filters.car.model'}
							  title={"Выберите марку"}
							  isMulti={true}
							  isActive={!!CARS_FILTERS.car.model}
							  data={{variables:CARS_FILTERS.car.model,options:['В1',"В2","В3","В4","В4"]}}>
			{CARS_FILTERS.car.model ? CARS_FILTERS.car.model : "Марка" }
		  </FiltersSystemInput>
		  <FiltersSystemInput
			path={'filters.car.model'}
			title={"Выберите модели"}
			isMulti={true}
			isActive={!!CARS_FILTERS.car.model}
			data={{variables:CARS_FILTERS.car.model,options:['M5',"M4","M3","I8","X3"]}}>
			{CARS_FILTERS.car.model ? CARS_FILTERS.car.model : "Модель" }
		  </FiltersSystemInput>
		  <FiltersSystemInput path={'filters.car.model'}
							  title={"Выберите поколение"}
							  isMulti={true}
							  isActive={!!CARS_FILTERS.car.model}
							  data={{variables:CARS_FILTERS.car.model,options:['В1',"В2","В3","В4","В4"]}}>
			{CARS_FILTERS.car.model ? CARS_FILTERS.car.model : "Поколение" }
		  </FiltersSystemInput>
		  <FiltersSystemInput path={'filters.car.model'}
							  title={"Выберите года"}
							  isMulti={true}
							  isActive={!!CARS_FILTERS.car.model}
							  data={{variables:CARS_FILTERS.car.model,options:['В1',"В2","В3","В4","В4"]}}
							  multi={{variables:['Год от',"Год до"]}}/>
		  <FiltersSystemInput path={'filters.car.model'}
							  title={"Выберите дату выпуска"}
							  isMulti={true}
							  isActive={!!CARS_FILTERS.car.model}
							  data={{variables:CARS_FILTERS.car.model,options:['В1',"В2","В3","В4","В4"]}}>
			{CARS_FILTERS.car.model ? CARS_FILTERS.car.model : "Дата выпуска до" }
		  </FiltersSystemInput>
		  <FiltersSystemInput path={'filters.car.model'}
							  title={"Выберите цены"}
							  isMulti={true}
							  isActive={!!CARS_FILTERS.car.model}
							  data={{variables:CARS_FILTERS.car.model,options:['В1',"В2","В3","В4","В4"]}}
							  multi={{variables:['Цена от, ₽',"Цена до, ₽"]}}/>
		  <FiltersSystemInput path={'filters.car.model'}
							  title={"Выберите пробег"}
							  isMulti={true}
							  isActive={!!CARS_FILTERS.car.model}
							  data={{variables:CARS_FILTERS.car.model,options:['В1',"В2","В3","В4","В4"]}}
							   multi={{variables:['Пробег от',"Пробег до"]}}/>
		  <FiltersSystemInput path={'filters.car.model'}
							  title={"Выберите характеристики"}
							  isMulti={true}
							  isActive={!!CARS_FILTERS.car.model}
							  data={{variables:CARS_FILTERS.car.model,options:['В1',"В2","В3","В4","В4"]}}>
			{CARS_FILTERS.car.model ? CARS_FILTERS.car.model : "Характеристики" }
		  </FiltersSystemInput>
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

