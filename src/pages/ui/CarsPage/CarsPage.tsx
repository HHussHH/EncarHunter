import "./CarsPage.scss";
import { SortSystem} from "@/widgets/ui";
import {CarList} from "@/features/ui";
import {Header} from "@/widgets/ui/Header/Header.tsx";
import {useEffect, useState} from "react";
import {FiltersSystem} from "@/widgets/ui/FiltersSystem/FiltersSystem.tsx";

export const CarsPage = () => {

  const [isWide, setIsWide] = useState(window.innerWidth > 450);

  useEffect(() => {
	const handleResize = () => setIsWide(window.innerWidth > 450);

	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
  }, []);


return (
	<div className="CarsPage">
	  { isWide && <Header />}
	  <div className="CarsPage__header">
		<FiltersSystem/>
		<SortSystem/>
	  </div>
	  <article className="CarsPage__body">
		  <CarList />
	  </article>
	</div>
  );
};

