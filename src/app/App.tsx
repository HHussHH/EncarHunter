import {useEffect, useState,} from "react";
import { useNavigate,useLocation} from 'react-router-dom';
import {Routers} from "./routes/Routers.tsx";
import {
  useLazyGetAllFiltersQuery,
  useLazyGetAllFuelQuery,
  useLazyGetAllModulesQuery
} from "@/entities/Filters/api/FiltersApi.ts";
import {setFuel, setMark, setModel} from "@/entities/Filters/api/FiltersSlice.ts";
import {useAppDispatch, useAppSelector} from "@/shared/api/types/redux.type.ts";
import {useLazyGetCarsWithFiltersQuery} from "@/entities/cars/api/CarsApi.ts";
import {setCars} from "@/entities/cars/api/CarsSlice.ts";
const TG_WEB_APP = window.Telegram.WebApp;

function App() {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [isWide, setIsWide] = useState(window.innerWidth <= 450);
  const [target] = useLazyGetAllFiltersQuery()
  const [getAllCar] = useLazyGetCarsWithFiltersQuery()
  const [getFuel] = useLazyGetAllFuelQuery();
  const [getModels] = useLazyGetAllModulesQuery();
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.cars)
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
    getFuel().then((data )=>{
      const inf = Object.entries(data.data!)
      dispatch(setFuel(inf))
    })
    getAllCar().then((data) =>{
      dispatch(setCars(data.data!.result))
    })
  }, []);

  useEffect(() => {
    const arr = state.filters.car.mark.split(", ")
    getModels({filters:arr}).then((data )=>{
      const inf = Object.entries(data.data!)
      dispatch(setModel(inf))
    })
  }, [state.filters.car.mark]);
  return (
    <>
      <Routers/>
    </>
  );
}

export default App;