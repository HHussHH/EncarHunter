import "./DetailsPage.scss";
import { FC, Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/shared/api/types/redux.type.ts";
import { Button, CarInfo, PositionDetails } from "@/shared/ui";
import { useNavigate, useParams } from "react-router-dom";
import { CarDetailsRule } from "@/shared/ui/CarDetailsRule/CarDetailsRule.tsx";
import CarSchema from "@/shared/assets/DetailsCard/CarShema.png";
import slide1 from "@/shared/assets/DetailsCard/slide1_compressed.jpeg";
import slide2 from "@/shared/assets/DetailsCard/slide2_compressed.jpeg";
import slide3 from "@/shared/assets/DetailsCard/slide3_compressed.jpeg";
import slide4 from "@/shared/assets/DetailsCard/slide4_compressed.jpeg";
import LeftArrow from "@/shared/assets/DetailsCard/LeftArrow.svg?react";
import RightArrow from "@/shared/assets/DetailsCard/RightArrow.svg?react";
interface IDetailsPageProps {
  children?: ReactNode;
}

const DetailsPage: FC<IDetailsPageProps> = () => {
  const details = ["2020.12", "83 961 км", "2 199 куб. см", "2WD"];
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const [slide, setSlide] = useState(0);
  const sliderArr = [
    { img: slide1, place: 0 },
    { img: slide2, place: 1 },
    { img: slide3, place: 2 },
    { img: slide4, place: 3 },
  ];

  const handleNextSlide = () => {
    if (slide === sliderArr.length - 1) setSlide(0);
    else {
      setSlide((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (slide === 0) setSlide(sliderArr.length - 1);
    else {
      setSlide((prev) => prev - 1);
    }
  };

  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="DetailsPage">
      <div className="DetailsPage__body">
        <div className="DetailsPage__info">
          <h1 className="DetailsPage__car">
            BMW 8-series M850i xDrive Luxury Gran Coupe
          </h1>
          {details.length > 0 && (
            <ul className="DetailsPage__details">
              {details.map((opt) => (
                <Fragment key={opt}>
                  <PositionDetails>{opt}</PositionDetails>
                </Fragment>
              ))}
            </ul>
          )}
        </div>

        <div className="DetailsPage__slider">
          <div
            onClick={handlePrevSlide}
            className="DetailsPage__slider__arrow DetailsPage__slider__arrow-l"
          >
            <LeftArrow />
          </div>
          <div
            onClick={handleNextSlide}
            className="DetailsPage__slider__arrow DetailsPage__slider__arrow-r"
          >
            <RightArrow />
          </div>
          {
            !loaded &&
            <div
              className="DetailsPage__slider__placeholder"
              style={{ display: !loaded ? "block" : "none" }}></div>
          }
          <img
            key={slide}
            className={`DetailsPage__slider__img DetailsPage__slider__img-${loaded && 'animate'}`}
            src={sliderArr[slide].img}
            onLoad={() => setLoaded(true)}
            alt="slider-img"
          />
          <span className="DetailsPage__slider__count">
            {slide + 1} из {sliderArr.length}
          </span>
        </div>

        <CarInfo />
        <div ref={elementRef}>
          <CarDetailsRule />
        </div>
        <div className="DetailsPage__btns">
          <button>Загрузить историю автомобиля в Корее</button>
          <button>Проверить это объявление на ENCAR</button>
        </div>
        <div className="DetailsPage__CarSchema">
          <h1 className="DetailsPage__CarSchema__title">Состояние кузова:</h1>
          <img src={CarSchema} alt={"CarSchema.png"} />
        </div>
        {isVisible && (
          <div className="DetailsPage__back">
            <Button
              size={"big"}
              theme={"blue"}
              onClick={() => navigate("/cars")}
            >
              Вернуться к объявлениям
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
