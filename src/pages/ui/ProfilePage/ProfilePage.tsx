import "./ProfilePage.scss";
import {FC, ReactNode, useEffect, useState} from "react";
import {PreferencesSelector} from "@/widgets/ui/PreferencesSelector/PreferencesSelector.tsx";
import {locationType, locationTypes, workType, workTypes} from "@/entities/cars/api/CarsPage.type.ts";
import DoneIcon from "@assets/Vacancies/Done.svg?react"
import HandWithPhone from "@assets/HandWithPhone.svg?react"
import TwoMans from "@assets/TwoMans.svg?react"
import OneMan from "@assets/OneMan.svg?react"
import {useAppDispatch, useAppSelector} from "@/shared/api/types/redux.type.ts";
import {RadioButton} from "@/shared/ui";
import {
  changeGetMail,
  changeProfileLocations,
  changeProfileStatus,
  changeWorkTypes
} from "@/entities/Profile/api/ProfileSlice.ts";

interface IProfilePageProps {
  children?: ReactNode
}

export const ProfilePage:FC<IProfilePageProps> = () => {
  const [selectFilter, setSelectFilter] = useState<boolean>(false)
	const dispatch = useAppDispatch()
  	const profile = useAppSelector(state => state.profile)

  const changeLocation = (value: string | string[]) => {
	  const data: locationType = value as locationType; // Просто строка
	  dispatch(changeProfileLocations({ value: data }));
  };

  const changeWork = (value: string | string[]) => {
	const data: workType = value as workType; // Просто строка
	dispatch(changeWorkTypes({ value: data }));
  };

  useEffect(() => {
		if(profile.workTypes.length > 0 && profile.locations.length > 0){
		  setSelectFilter(true)
		  dispatch(changeGetMail(true))
		}else {
		  setSelectFilter(false)
		  dispatch(changeGetMail(false))
		}
  }, [profile.workTypes,profile.locations]);
  const variants:{
	label:string,
	value:"company" | "individual" | null,
  }[] = [
	{
	  label:'Я строитель/бригада',
	  value:"individual"
	},
	{
	  label:'Компания/подрядчик',
	  value:"company"
	}
  ]

  useEffect(() => {
	dispatch(changeGetMail(selectFilter))
  },[selectFilter])


  return (
	<div className="ProfilePage">
	 	<div className={`ProfilePage__banner ${profile.profileStatus === null ? 'ProfilePage__banner-empty' : ""}`} style={{border: profile.profileStatus !== null ? "0px solid #CDE5C6":"4px solid #C60000"}}>
		  <div className="ProfilePage__banner__body">
			<h1 className="ProfilePage__banner__title" style={{color:profile.profileStatus !== null ? "#000" : "#E71818"}}>{profile.profileStatus !== null ? "Ваш профиль" : "Выберите профиль"}</h1>
			<ul className={"ProfilePage__banner__list"}>
			  {
				variants.map((item) =>
				  <RadioButton onClick={() => dispatch(changeProfileStatus(item.value))} isActive={profile.profileStatus === item.value} label={item.label}/>
				)
			  }
			</ul>
		  </div>
		  {
			profile.profileStatus === null &&  <HandWithPhone/>
		  }
		  {
			profile.profileStatus === "individual" &&  <TwoMans/>
		  }
		  {
			profile.profileStatus === "company" &&  <OneMan/>
		  }
		</div>
	  <div className="ProfilePage__card">
		<header className="ProfilePage__header">
		  <h1 className="ProfilePage__title">Уведомления</h1>
		  <p className="ProfilePage__desc">
			Если компании будут искать исполнителей по этим фильтрам, вы получите уведомления в бота Стройхантер
		  </p>
		</header>
		<div className={"ProfilePage__selectors"}>
		  <PreferencesSelector
			color="hold-yellow"
			isMulti={true}
			title={"Выберите города"}
			placeholder={"Выберите города"}
			changeHandler={changeLocation}
			isPlaceholder={profile.locations.length === 0}
			isWhite={true}
			value={profile.locations}
			options={[...locationTypes]}
		  />
		  <PreferencesSelector
			color="hold-yellow"
			isMulti={true}
			title={"Выберите виды работ"}
			placeholder={"Выберите виды работ"}
			changeHandler={changeWork}
			isPlaceholder={profile.workTypes.length === 0}
			isWhite={true}
			value={profile.workTypes}
			options={[...workTypes]}
		  />
		</div>
		<div className="ProfilePage__footer" onClick={() => setSelectFilter(prev => !prev)}>
		  <div className={`ProfilePage__toggle ProfilePage__toggle-${selectFilter ? "active":"false"}`}>
			{selectFilter && <DoneIcon/>}
		  </div>
		  <span className={`ProfilePage__info ProfilePage__info-${profile.canGetMail ? "active":"false"}`}>Я хочу получать сообщения в бот
о новых объявлениях по фильтрам</span>
		</div>
	  </div>

	</div>
  );
};

