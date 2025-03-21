import {Outlet, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {CarsPage, DetailsPage, EntryPage} from "@/pages/ui";
import {Container} from "@/widgets/ui";


import {useEffect, useMemo, useState} from "react";

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

  const [isWide, setIsWide] = useState(window.innerWidth >= 450);

  useEffect(() => {
	const handleResize = () => setIsWide(window.innerWidth >= 450);

	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
  })
  return (
	<Routes>
	  <Route path={ROUTES_PATH.HOME} element={isWide || !TG_WEB_APP.initDataUnsafe.user ? <Container><CarsPage /></Container> : <EntryPage  />} />
	  <Route path={ROUTES_PATH.CARS} element={<Container><CarsPage /></Container>}></Route>
	  <Route path={ROUTES_PATH.DETAILS_VAC} element={<Container isNav={false}><DetailsPage /></Container>} />
	  <Route path={ROUTES_PATH.SUBSCRIBE} element={<Container><h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Подписка</h1></Container>} />
	  <Route path={ROUTES_PATH.ABOUT} element={<Container><h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>О Нас</h1></Container>}/>
	</Routes>
  );
};