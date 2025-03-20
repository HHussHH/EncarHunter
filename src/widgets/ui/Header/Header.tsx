import "./Header.scss";
import {FC, ReactNode} from "react";
import Logo from "@/shared/assets/EntryPage/NewLogo.svg"
import KoreaFlag from "@/shared/assets/others/KoreaFlag.svg"
import TelegramIcon from "@/shared/assets/DetailsCard/TelegramIcon.svg"
import {NavLink} from "react-router-dom";

interface IHeaderProps {
  children?: ReactNode
}

export const Header:FC<IHeaderProps> = () => {
  return (
	<header className="Header">
		<div className="Header__logo">
		  <img src={Logo} alt={"logo"} width={200} height={78}/>
		</div>
	<div className={"Header__content"}>
	  <nav className="Header__nav">
		<NavLink
		  className={({isActive}) =>
			`Header__nav__el Header__nav__el-${isActive ? "active":"none"}`}
		  to={'/cars'}>Поиск авто</NavLink>
		<NavLink className={({isActive}) =>
		  `Header__nav__el Header__nav__el-${isActive ? "active":"none"}`}
				 to={'/subscribe'}>Подписка на авто</NavLink>
		<NavLink className={({isActive}) =>
		  `Header__nav__el Header__nav__el-${isActive ? "active":"none"}`}
				 to={'/about'}>О нас</NavLink>
	  </nav>
	  <aside className="Header__btns">
		<button className="Header__btn Header__btn-bot">
		  <img src={KoreaFlag} alt={'KoreaFlag'} width={20} height={20}/>
		  <label>Наш Telegram-канал</label></button>
		<button className="Header__btn Header__btn-telegram">
		  <img src={TelegramIcon} alt={'TelegramIcon'} width={24} height={24}/>
		  <label>Связаться с нами</label>
		</button>
	  </aside>
	</div>
	</header>
  );
};

