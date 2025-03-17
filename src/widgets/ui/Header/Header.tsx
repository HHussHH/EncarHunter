import "./Header.scss";
import {FC, ReactNode} from "react";
import Logo from "@/shared/assets/EntryPage/TestLogo.svg"

interface IHeaderProps {
  children?: ReactNode
}

export const Header:FC<IHeaderProps> = () => {
  return (
	<div className="Header">
		<div className="Header__logo">
		  <img src={Logo} alt={"logo"} width={200} height={78}/>
		  <span>Более 30 000 авто из Южной Кореи
уже доступны к заказу</span>
		</div>
	  <div className="Header__btns">
		<button className="Header__btn Header__btn-telegram">телеграм канал</button>
		<button className="Header__btn Header__btn-bot">наш бот</button>
		<button className="Header__btn Header__btn-car">заказать авто</button>
	  </div>
	</div>
  );
};

