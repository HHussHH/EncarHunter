import { useEffect, useState } from "react";
import "./PhotoCollage.scss";
import slide1 from "@/shared/assets/EntryPage/1_compressed.jpeg";
import slide2 from "@/shared/assets/EntryPage/2_compressed.jpeg";
import slide3 from "@/shared/assets/EntryPage/3_compressed.jpeg";
import slide4 from "@/shared/assets/EntryPage/4_compressed.jpeg";
import slide5 from "@/shared/assets/EntryPage/5_compressed.jpeg";
import slide6 from "@/shared/assets/EntryPage/6_compressed.jpeg";
import slide7 from "@/shared/assets/EntryPage/7_compressed.jpeg";



interface IPhotoCollage {
  src: string;
  name: string;
  id: number;
}

const PhotoCollage = () => {
  const photos: IPhotoCollage[] = [
    { src: slide1, name: "slide1", id: 1 },
    { src: slide2, name: "slide2", id: 2 },
    { src: slide3, name: "slide3", id: 3 },
    { src: slide4, name: "slide4", id: 4 },
    { src: slide5, name: "slide5", id: 5 },
    { src: slide6, name: "slide6", id: 6 },
    { src: slide7, name: "slide7", id: 7 },

  ];

  const [pos, setPos] = useState<number | null>(null);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    const number = Math.floor(Math.random() * photos.length) + 1;
    setPos(number);
  }, []);

  return (
    <div className="PhotoCollage">
      {pos !== null && (
        <>
          {isLoad &&  <img
            src={photos.find((photo) => photo.id === pos)?.src}
            alt="photo name"

            onLoad={() => setIsLoad(true)}
            className={`PhotoCollage__img ${isLoad ? "PhotoCollage__loaded" : ""}`}
          />}
          {!isLoad && <div className="PhotoCollage__placeholder"></div>}
        </>
      )}
      <div className="PhotoCollage__text">
        <p>
          Более 30 000 авто
          <br/>
          <strong> из Южной Кореи </strong>
          <br/>
          доступны к заказу
        </p>
      </div>
    </div>
  );
};

export default PhotoCollage;
