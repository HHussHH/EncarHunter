import {FC, ReactNode, useEffect, useMemo, useState} from "react";
import { NavBar } from "@/widgets/ui/NavBar/NavBar.tsx";
import "./Container.scss";
import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "@/widgets/ui/Header/Header.tsx";

interface IContainerProps {
  children: ReactNode;
  isNav?: boolean;
}



export const Container: FC<IContainerProps> = ({ children, isNav = true }) => {
  //@ts-ignore
  const padBottom = window.Telegram.WebApp.safeAreaInset.bottom;

const width = window.innerWidth
  return (
	<div
	  className="Container"
	  style={{
		paddingBottom: width > 450 ? 'none': `${
		  padBottom > 0 ? (!isNav ? padBottom + 20 : padBottom + 82) : isNav ? 34 + 82 :0
		}px`,
	  }}
	>
	  {children}
	  {isNav && width < 451 && <NavBar />}
	  <Outlet />
	</div>
  );
};