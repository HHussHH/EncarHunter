import "./ForBusinessPage.scss";
import {FC, ReactNode} from "react";
import BusinessBanner from "@assets/DealIcon.svg?react"
import RefsBanner from "@assets/Refs/RefsBanner.svg?react"

import HandWithPhone from "@assets/hand-with-phone.svg?react"
import {Button} from "@/shared/ui";
import {useNavigate} from "react-router-dom";

interface IForBusinessPageProps {
  children?: ReactNode
}

export const ForBusinessPage:FC<IForBusinessPageProps> = () => {
  const navigate = useNavigate()

  const handleClick = () =>{
	try{
	  window.Telegram.WebApp.openTelegramLink("https://t.me/MustafaevN")}
	catch (e){
	  if(window.Telegram.WebApp){
		window.Telegram.WebApp.showAlert("Что-то пошло не так")
	  }else{
		alert("Что-то пошло не так")
	  }
	}
  }
  return (
	<div className="ForBusinessPage">
	  <BusinessBanner className="ForBusinessPage__banner"/>
	  <div className="ForBusinessPage__info">
		<h1 className="ForBusinessPage__title">Услуги для подрядчиков и строительных компаний</h1>
		<div className="ForBusinessPage__subtitle">
		  <span className="ForBusinessPage__desc">Экономьте время на поиск рабочих для своих объектов</span>
		  <span className="ForBusinessPage__announce">Мои объявления (0)</span>
		</div>
	  </div>

	  <div className="ForBusinessPage__cards">

		<div className="ForBusinessPage__card">
		  <h2 className="ForBusinessPage__card__title">Разместите объявление о работе на стройке</h2>
		  <span className="ForBusinessPage__card__desc">Вашу вакансию могут увидеть более
100 000 строителей по всей России
		  </span>
		  <Button onClick={() => {
			navigate("/posted")
		  }} size={"big"} theme={"green"}>
			Разместить объявление
		  </Button>
		  <HandWithPhone className={"ForBusinessPage__card__icon"}/>
		</div>


		<div className="ForBusinessPage__card">
		  <h2 className="ForBusinessPage__card__title">Массовая рассылка по базе строителей</h2>
		  <span className="ForBusinessPage__card__desc">Отправим точечную рассылку всей базе
			строителей по необходимым вам фильтрам (город, специализация и тп).
		  </span>
		  <span className="ForBusinessPage__card__desc">Строителям придет пуш-уведомелние
и объявление будет точно прочитано
		  </span>
		  <Button  onClick={handleClick} size={"medium"} theme={"blue"}>
			Написать менеджеру
		  </Button>
		</div>

		<div className="ForBusinessPage__card">
		  <h2 className="ForBusinessPage__card__title">Реклама в приложении</h2>
		  <span className="ForBusinessPage__card__desc">Разместим баннер с рекламой внутри мини-приложения и в каналах. Стоимость обсуждаема</span>
		  <Button onClick={handleClick} size={"medium"} theme={"blue"}>
			Написать менеджеру
		  </Button>
		</div>
	  </div>
	</div>
  );
};

