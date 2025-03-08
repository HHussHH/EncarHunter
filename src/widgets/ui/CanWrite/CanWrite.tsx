import "./CanWrite.scss";
import {FC, ReactNode} from "react";
import {RadioButtonList} from "@/features/ui/RadioButtonList/RadioButtonList.tsx";

interface ICanWriteProps {
  children?: ReactNode
}
const TG_WEB_APP = window.Telegram.WebApp;

export const CanWrite:FC<ICanWriteProps> = () => {
  return (
	<div className="CanWrite">
	  <h1 className="CanWrite__title">Можно ли писать в Telegram</h1>
	  <RadioButtonList options={[{label:`Да (@${TG_WEB_APP.initDataUnsafe.user?.username || 'username'})`,value:1},{label:"Нет",value:2}]}/>
	</div>
  );
};

