import { useEffect, useState } from "react";
import "./PhotoCollage.scss";
import slide0 from "@assets/EntryPage/car-1.png";
import slide1 from "@/shared/assets/DetailsCard/slide1.jpg";
import slide2 from "@/shared/assets/DetailsCard/slide2.jpg";
import slide3 from "@/shared/assets/DetailsCard/slide3.jpg";
import slide4 from "@/shared/assets/DetailsCard/slide4.jpg";

interface IPhotoCollage {
  src: string;
  name: string;
  id: number;
}

const PhotoCollage = () => {
  const photos: IPhotoCollage[] = [
    { src: slide0, name: "slide0", id: 1 },
    { src: slide1, name: "slide1", id: 2 },
    { src: slide2, name: "slide2", id: 3 },
    { src: slide3, name: "slide3", id: 4 },
    { src: slide4, name: "slide4", id: 5 },
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
          <img
            src={photos.find((photo) => photo.id === pos)?.src}
            alt="photo name"
            onLoad={() => setIsLoad(true)}
            className={`PhotoCollage__img ${isLoad ? "loaded" : ""}`}
          />
          {!isLoad && <div className="PhotoCollage__placeholder"></div>}
        </>
      )}
    </div>
  );
};

export default PhotoCollage;
