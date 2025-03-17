import "./NavBar.scss";
import {FC, ReactNode, memo, useState, useEffect} from "react";
import {NavElem} from "@/shared/ui";
import BellIcon from "@/shared/assets/NavBar/Bell.webp"
import BellIconStatic from "@/shared/assets/NavBar/frame_000_delay-0.02s.png"
import HouseIconStatic from "@/shared/assets/NavBar/HouseIconStatic.png"
import HouseIcon from "@/shared/assets/NavBar/HouseIcon.webp"
import CarIcon from "@/shared/assets/NavBar/Car.webp"
import CarIconStatic from "@/shared/assets/NavBar/CarStatic.png"

interface INavBarProps {
  children?: ReactNode
}
export const NavBar:FC<INavBarProps> = () => {
  const TG_WEB_APP = window.Telegram.WebApp;
  //@ts-ignore
  const padBottom = TG_WEB_APP.safeAreaInset.bottom
  const [isPlaying, setIsPlaying] = useState({
	car: false,
	bell: false,
	house: false,
  });

  const handleClick = (key: keyof typeof isPlaying) => {
	setIsPlaying((prev) => ({ ...prev, [key]: true }));
  };

  useEffect(() => {
	const timeoutIds = Object.entries(isPlaying).map(([key, value]) =>
	  value ? setTimeout(() => setIsPlaying((prev) => ({ ...prev, [key]: false })), 3100) : null
	);

	return () => timeoutIds.forEach((id) => id && clearTimeout(id));
  }, [isPlaying]);
  return (
	<nav className="NavBar" style={{bottom: padBottom && padBottom > 0 ? padBottom - 10 : '24px'}}>
		<ul className="NavBar__body">
		  <NavElem path={"cars"} label={"Авто в наличие"} onClick={() => handleClick("car")}>
			<div className={"NavBar__el"} >
			  {
				!isPlaying.car ? <img alt={'icon'} src={CarIconStatic}/>  : <img alt={'icon'} src={CarIcon}/>
			  }
			</div>
		  </NavElem>
		  <NavElem path={"subscribe"} label={"Подписка"} onClick={() => handleClick("bell")}>
			  <div className={"NavBar__el"} >
				{
				  !isPlaying.bell ? <img alt={'icon'} src={BellIconStatic}/>  : <img alt={'icon'} src={BellIcon}/>
				}
			  </div>

		  </NavElem>
		  <NavElem path={"AboutUs"} label={"О Нас"} onClick={() => handleClick("house")}>
			<div className={"NavBar__el"} >
			  {
				!isPlaying.house ? <img alt={'icon'} src={HouseIconStatic}/>  : <img alt={'icon'} src={HouseIcon}/>
			  }
			</div>
		  </NavElem>
		</ul>
	</nav>
  );
};


