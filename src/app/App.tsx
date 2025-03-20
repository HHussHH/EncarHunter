import {useEffect, useState,} from "react";
import { useNavigate,useLocation} from 'react-router-dom';
import {Routers} from "./routes/Routers.tsx";
import { useLazyGetAllFiltersQuery} from "@/entities/Filters/api/FiltersApi.ts";
import { setMark} from "@/entities/Filters/api/FiltersSlice.ts";
import {useAppDispatch} from "@/shared/api/types/redux.type.ts";
import {useLazyGetCarsWithFiltersQuery} from "@/entities/cars/api/CarsApi.ts";
import {setCars} from "@/entities/cars/api/CarsSlice.ts";
const TG_WEB_APP = window.Telegram.WebApp;

function App() {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [isWide, setIsWide] = useState(window.innerWidth <= 450);
  const [target] = useLazyGetAllFiltersQuery()
  const [getAllCar] = useLazyGetCarsWithFiltersQuery()

  const dispatch = useAppDispatch()
  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth <= 450);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if(pathname.includes("tgWebAppData")){
      localStorage.setItem('initialPath_encar',"/");
    }else{
      localStorage.setItem('initialPath_encar',pathname);
    }
    if(!TG_WEB_APP.initDataUnsafe.user){
      navigate('/cars');
    }
    if(isWide){
      navigate('/');
    }
    if(localStorage.getItem('initialPath_encar') === "/" && !isWide || !TG_WEB_APP.initDataUnsafe.user){
      navigate('/cars');
    }
    TG_WEB_APP.disableVerticalSwipes();
    TG_WEB_APP.expand();
  }, []);

  useEffect(() => {
    localStorage.setItem('initialPath_encar',pathname);
    if(localStorage.getItem('initialPath_encar') === "/" && !isWide){
      navigate('/cars');
    }
  }, [pathname]);

  if (TG_WEB_APP) {
    if (TG_WEB_APP.isExpanded) {
      TG_WEB_APP.expand();
    } else {
      TG_WEB_APP.expand();
    }
  }


  useEffect(() => {
    const container = document.querySelector('.Container') as HTMLElement;
    if (!container) return;

    window.scrollTo(0, 0);

  }, [pathname]);


  useEffect(() => {
    target().then((data )=>{
      const inf = Object.entries(data.data!)
      dispatch(setMark(inf))
    })
    getAllCar().then((data) =>{
      console.log(data.data!.result)
      dispatch(setCars(data.data!.result))
    })
  }, []);

  return (
    <>
      <Routers/>
    </>
  );
}

export default App;