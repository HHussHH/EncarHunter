import "./CarsPage.scss";
import {
  FiltersTypes, FilterVariables, SortBy, SortByType,
} from "@/entities/cars/api/CarsPage.type.ts";
import LocationMap from "@/shared/assets/location.svg?react";
import CarIcon from "@/shared/assets/CarsList/car.svg?react";
import {useAppDispatch, useAppSelector} from "@/shared/api/types/redux.type.ts";
import {CustomSelector} from "@/widgets/ui";
import {CarList} from "@/features/ui";
import {changeFilters, changeSortBy} from "@/entities/cars/api/CarsSlice.ts";
import {Header} from "@/widgets/ui/Header/Header.tsx";
import {useEffect, useState} from "react";

export const CarsPage = () => {
const state = useAppSelector((state) => state.cars)
  const dispatch = useAppDispatch()
  const changeFilter = (value: string | string[]) => {
	const data: FiltersTypes = value as FiltersTypes; // Просто строка
	dispatch(changeFilters({ value: data }));
  };
  const changeSort = (value: string | string[]) => {
	const data: SortByType = value as SortByType; // Просто строка
	dispatch(changeSortBy({ value: data }));
  };
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
		<CustomSelector
		  selected={true}
		  icon={<LocationMap width={isWide ? 24 : 12} height={isWide ? 24 : 12}/>}
		  type="Фильтры"
		  title={"Фильтры"}
		  changeHandler={changeFilter}
		  value={state.filters}
		  isMulti={true}
		  options={[...FilterVariables]}
		/>		<CustomSelector
		  options={[...SortBy]}
		  value={state.sortBy}
		  changeHandler={changeSort}
		  title={"Сортировка"}
		  icon={<CarIcon  width={isWide ? 24 : 12} height={isWide ? 24 : 12}/>} type="Сортировка"/>	  </div>
	  <div className="CarsPage__body">
		  <CarList title="Последние объявления" />
	  </div>
	</div>
  );
};

