import {FC, ReactNode, useEffect, useState} from "react";
import { NavBar } from "@/widgets/ui/NavBar/NavBar.tsx";
import "./Container.scss";
import {Outlet, useNavigate} from "react-router-dom";

interface IContainerProps {
  children: ReactNode;
  isNav?: boolean;
}



export const Container: FC<IContainerProps> = ({ children, isNav = true }) => {
  //@ts-ignore
  const padBottom = window.Telegram.WebApp.safeAreaInset.bottom;

  const [isWide, setIsWide] = useState(window.innerWidth > 450);

  useEffect(() => {
	const handleResize = () => setIsWide(window.innerWidth > 450);

	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
	<div
	  className="Container"
	  style={{
		paddingBottom: isWide
		  ? "20px"
		  : `${
			padBottom > 0
			  ? !isNav
				? padBottom + 20
				: padBottom + 82
			  : isNav
				? 34 + 82
				: 0
		  }px`,
	  }}
	>
	  {children}
	  {isNav && !isWide && <NavBar />}
	  <Outlet />
	</div>
  );
};