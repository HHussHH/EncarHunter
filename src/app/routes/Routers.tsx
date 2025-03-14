import {Outlet, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {CarsPage, DetailsPage, EntryPage} from "@/pages/ui";
import {Container} from "@/widgets/ui";

import {ForBusinessPage} from "@/pages/ui/ForBusinessPage/ForBusinessPage.tsx";
import {ProfilePage} from "@/pages/ui/ProfilePage/ProfilePage.tsx";
import {useEffect, useMemo} from "react";

export const Routers = () => {
  const TG_WEB_APP = window.Telegram.WebApp;
  const BackButton = TG_WEB_APP.BackButton;

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const ROUTES_PATH = {
  HOME:"/",
	CARS:"/cars",
  	DETAILS_VAC:"/cars/:id",
	SUBSCRIBE:"/subscribe",
	ABOUT:"/AboutUs",
  NOT_FOUND:"*"
} as const

  useEffect(() => {
	const pathArr = pathname.split("/")
	if(pathArr.length > 2){
	  BackButton.show();
	  BackButton.onClick(function() {
		BackButton.hide();
	  });
	  TG_WEB_APP.onEvent('backButtonClicked', function() {
	  	pathArr.pop()
		navigate(`${pathArr.join("/")}`);
	  });
	}else{
	  BackButton.hide();
	}

  },[BackButton, navigate, pathname]);
  

  return (
	<Routes>
	  <Route path={ROUTES_PATH.HOME} element={<EntryPage  />} />
	  <Route path={ROUTES_PATH.CARS} element={<Container><CarsPage /></Container>}></Route>
	  <Route path={ROUTES_PATH.DETAILS_VAC} element={<Container isNav={false}><DetailsPage /></Container>} />
	  <Route path={ROUTES_PATH.SUBSCRIBE} element={<Container><h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Подписка</h1></Container>} />
	  <Route path={ROUTES_PATH.ABOUT} element={<Container><h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>О Нас</h1></Container>}/>
	</Routes>
  );
};
