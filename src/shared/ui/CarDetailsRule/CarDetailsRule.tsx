import "./CarDetailsRule.scss";
import {FC, ReactNode} from "react";

interface ICarDetailsRuleProps {
  children?: ReactNode
}

export const CarDetailsRule:FC<ICarDetailsRuleProps> = () => {
  return (
	<div className="CarDetailsRule">
	 	<h1 className="CarDetailsRule__title">Cтоимость авто со всеми расходами:</h1>
	  <div className="CarDetailsRule__details">
		<p className="CarDetailsRule__warning">Предварительная стоимость автомобиля с доставкой из Южной Кореи до Владивостока*</p>
		<p className="CarDetailsRule__price"><strong>4 794 435 руб</strong>, в которую включено:</p>
		<ul className="CarDetailsRule__list">
		  <ol className="CarDetailsRule__el">1. Таможенная пошлина: 600725 руб.</ol>
		  <ol className="CarDetailsRule__el">2. Утилизационный сбор (с учетом изменений от 01.01.2025): 3400 руб.
		  </ol>
		  <ol className="CarDetailsRule__el">3. Подбор и осмотр автомобиля В Южной Корее: 400000 ₩
		  </ol>
		  <ol className="CarDetailsRule__el">4. Комиссия дилера: 440000 ₩
		  </ol>
		  <ol className="CarDetailsRule__el">5. Логистика по Южной Корее: 260000 ₩
		  </ol>
		  <ol className="CarDetailsRule__el">6. Таможенная очистка: 100000 ₩</ol>
		  <ol className="CarDetailsRule__el">7. Доставка до Владивостока: 1190000 ₩
		  </ol>
		  <ol className="CarDetailsRule__el">8. Услуги брокера в РФ (СБКТС/Склад временного хранения/Экспертиза) 110500 р.
		  </ol>
		</ul>
		<footer className="CarDetailsRule__footer">
		  <p className="CarDetailsRule__etc">*конечная стоимость может незначительно отличаться.</p>
		  <p className="CarDetailsRule__etc">**Расчет обновлен 27.02.2025 по курсу ЦБ РФ RUB/KRW = 16.54, EUR/RUB = 91.18</p>
		</footer>
	  </div>
	</div>
  );
};

