import "./NavBar.scss";
import {FC, ReactNode,memo} from "react";
import {NavElem} from "@/shared/ui";
import CarsIcon from "@/shared/assets/CarsList/car.svg?react"
import BellIcon from "@/shared/assets/NavBar/Bell.svg?react"
import AboutUs from "@/shared/assets/NavBar/AboutUs.svg?react"

interface INavBarProps {
  children?: ReactNode
}
export const NavBar:FC<INavBarProps> = () => {
  const TG_WEB_APP = window.Telegram.WebApp;
  //@ts-ignore
  const padBottom = TG_WEB_APP.safeAreaInset.bottom
  return (
	<nav className="NavBar" style={{bottom: padBottom && padBottom > 0 ? padBottom - 10 : '24px'}}>
		<ul className="NavBar__body">
		  <NavElem path={"cars"} label={"Авто в наличие"}>
			{/*<CarsIcon width={28} height={28}/>*/}
			<div className={"NavBar__el"}>
			  🚘
			</div>
		  </NavElem>
		  <NavElem path={"subscribe"} label={"Подписка"}>
			{/*<BellIcon width={28} height={28}/>*/}
			<div className={"NavBar__el"}>
			  🔔
			</div>

		  </NavElem>
		  <NavElem path={"AboutUs"} label={"О Нас"}>
			{/*<AboutUs width={28} height={28}/>*/}
			<div className={"NavBar__el"}>
			  🏢
			</div>


		  </NavElem>
		</ul>
	</nav>
  );
};


