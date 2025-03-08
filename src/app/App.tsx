import {useEffect,} from "react";
import { useNavigate,useLocation} from 'react-router-dom';
import {Routers} from "./routes/Routers.tsx";
const TG_WEB_APP = window.Telegram.WebApp;

function App() {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  useEffect(() => {
    console.log("пу-пу-пу");
    if(pathname.includes("tgWebAppData")){
      localStorage.setItem('initialPath',"/");
    }else{
    localStorage.setItem('initialPath',pathname);
    }
	navigate('/');
    TG_WEB_APP.disableVerticalSwipes();
    TG_WEB_APP.expand();
  }, []);
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
