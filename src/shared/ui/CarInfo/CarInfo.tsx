import "./CarInfo.scss";
import {FC, ReactNode} from "react";
import TelegramIcon from "@/shared/assets/DetailsCard/TelegramIcon.svg?react"
import WhatsAppIcon from "@/shared/assets/DetailsCard/WhatsappIcon.svg?react"

interface ICarInfoProps {
  children?: ReactNode
}

export const CarInfo:FC<ICarInfoProps> = () => {
  const price = 3031968

  return (
	<div className="CarInfo">
	  <p className={"CarInfo__notice"}>Предварительная стоимость под ключ</p>
	  <h1 className={"CarInfo__price"}>{price.toLocaleString("ru-RU")} ₽</h1>
	  <button className="CarInfo__shareToFriend" onClick={() => {
		const botMessage = "Привет мир от бота - ";
		const userName = "Иван"; // например, ты хочешь добавить имя пользователя

		const fullMessage = `${botMessage}${userName}`;
		//@ts-ignore
		window.Telegram.WebApp.shareMessage(fullMessage);
	  }}>
		<TelegramIcon/>
		<label>Отправить другу в Telegram</label>
	  </button>
		<ul className={"CarInfo__list"}>
			<ol className="CarInfo__el">
			  <label className="CarInfo__title">Марка</label>
			  <span className="CarInfo__value">Bmw</span>
			</ol>
		  <ol className="CarInfo__el">
			<label className="CarInfo__title">Модель</label>
			<span className="CarInfo__value">X4</span>
		  </ol>
		  <ol className="CarInfo__el">
			<label className="CarInfo__title">Пробег</label>
			<span className="CarInfo__value">48 110 км</span>
		  </ol>
		  <ol className="CarInfo__el">
			<label className="CarInfo__title">Объем двигателя</label>
			<span className="CarInfo__value">2 998 куб. см.</span>
		  </ol>
		  <ol className="CarInfo__el">
			<label className="CarInfo__title">Топливо</label>
			<span className="CarInfo__value">Бензин + Электро</span>
		  </ol>
		  <ol className="CarInfo__el">
			<label className="CarInfo__title">Трансмиссия</label>
			<span className="CarInfo__value">АКПП</span>
		  </ol>
		  <ol className="CarInfo__el">
			<label className="CarInfo__title">Привод</label>
			<span className="CarInfo__value">4WD</span>
		  </ol>
		  <ol className="CarInfo__el">
			<label className="CarInfo__title">Сумма страховых выплат</label>
			<span className="CarInfo__value">0 руб</span>
		  </ol>
		  <ol className="CarInfo__el">
			<label className="CarInfo__title">Дата выпуска авто</label>
			<span className="CarInfo__value">2021.02</span>
		  </ol>
		</ul>
	  <p className={`CarInfo__info`}>
		Связь с менеджером для обсуждения расчета данного авто:
	  </p>
	  <div className={`CarInfo__btns`}>
		<button>
		  <WhatsAppIcon/>
		  <label>WhatsApp</label>
		</button>
			<button>
			  <TelegramIcon/>
			  <label>Telegram</label>
			</button>
	  </div>
	</div>
  );
};

