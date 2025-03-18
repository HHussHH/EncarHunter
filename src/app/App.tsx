import {useEffect, useState,} from "react";
import { useNavigate,useLocation} from 'react-router-dom';
import {Routers} from "./routes/Routers.tsx";
const TG_WEB_APP = window.Telegram.WebApp;

function App() {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const [isWide, setIsWide] = useState(window.innerWidth <= 450);

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
    if(isWide){
	navigate('/');
    }
    if(localStorage.getItem('initialPath_encar') === "/" && !isWide){
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


  return (
   <>
     <Routers/>
   </>
  );
}

export default App;
