import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "@/shared/ui";
import Logo from "@/shared/assets/EntryPage/TestLogo.svg?react"
import carIcon from "@assets/EntryPage/CarIcon.svg";
import "./EntryPage.scss";
import PhotoCollage from "@/widgets/ui/PhotoCollage/PhotoCollage";

//@ts-ignore
const tg = window.Telegram.WebApp;

export const EntryPage = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (tg) {
      tg.ready();
    }
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 300);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      console.log(tg)
      const path = localStorage.getItem("initialPath_encar");
      if (path === "/" || path === null) {
        navigate(`/cars`);
      } else {
        navigate(`${path}`);
      }
    }
  }, [progress]);

  return (
    <div className="EntryPage">
      <ProgressBar progress={progress} />
      <div className="EntryPage__logo">
        <Logo />
      </div>
      <PhotoCollage />
      <div className="EntryPage__wrapper">
        <div className="EntryPage__banner">
          <div className="EntryPage__banner__body">
            <h1 className="EntryPage__banner__title">
              EncarHunter — удобный поиск и заказ авто из Южной Кореи
            </h1>
            <div className="EntryPage__banner__opros">
              <span className="EntryPage__banner__text">
                1 500+ подобранных авто в 2024
              </span>
            </div>
          </div>
          <img src={carIcon} alt="" />
        </div>
      </div>

    </div>
  );
};
