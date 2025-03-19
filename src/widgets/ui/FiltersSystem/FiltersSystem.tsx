import "./FiltersSystem.scss";
import {FC, ReactNode, useEffect, useState} from "react";
import {FiltersSystemInput} from "@/shared/ui/FiltersSystemInput/FiltersSystemInput.tsx";

interface IFiltersSystemProps {
  children?: ReactNode
}

export const FiltersSystem:FC<IFiltersSystemProps> = () => {
  const [isWide, setIsWide] = useState(window.innerWidth <= 450);

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
		  <FiltersSystemInput>
			Марка
		  </FiltersSystemInput>
		  <FiltersSystemInput>
			Модель
		  </FiltersSystemInput>
		  <FiltersSystemInput>
			Поколение
		  </FiltersSystemInput>
		  <FiltersSystemInput multi={{variables:['Год от',"Год до"]}}/>
		  <FiltersSystemInput>
			Дата выпуска до
		  </FiltersSystemInput>
		  <FiltersSystemInput multi={{variables:['Цена от, ₽',"Цена до, ₽"]}}/>
		  <FiltersSystemInput multi={{variables:['Пробег от',"Пробег до"]}}/>
		  <FiltersSystemInput>
				Характеристики
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

