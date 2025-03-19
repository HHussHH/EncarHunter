import "./Header.scss";
import {FC, ReactNode} from "react";
import Logo from "@/shared/assets/EntryPage/TestLogo.svg"
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
		<button className="Header__btn Header__btn-telegram">телеграм канал</button>
		<button className="Header__btn Header__btn-bot">наш бот</button>
		<button className="Header__btn Header__btn-car">заказать авто</button>
	  </aside>
	</div>
	</header>
  );
};

