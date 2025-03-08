import "./CustomListItem.scss";
import { FC, LiHTMLAttributes } from "react";
import DoneIcon from "@assets/Vacancies/Done.svg?react";

interface ICustomListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  value: string;
  selected: boolean; // 🔹 Выбрано ли значение
  multi?: boolean;
  onClick: () => void; // 🔹 Обработчик выбора
}

export const CustomListItem: FC<ICustomListItemProps> = (props) => {
  const {
	multi,
	value,
	selected,
	onClick,
	...otherProps
  } = props

  return (
	<li
	  onClick={onClick} // 🔹 Вызываем `onClick`, который передаётся сверху
	  className={`CustomListItem ${multi ? "CustomListItem__left" : "CustomListItem__between"} 
        ${selected ? multi ? "CustomListItem-selected" : "CustomListItem-active" : ""}`}
	  {...otherProps}
	>
	  {multi ? (
		<div
		  className={`CustomListItem__checkbox ${selected ? "CustomListItem__checkbox-active" : ""}`}
		>
		  {selected && <DoneIcon className="CustomListItem__checkbox__done" width={16} height={12} fill={"#FFF"} />}
		</div>
	  ) : null}

	  <label className="CustomListItem__label">{value}</label>

	  {!multi && selected && <DoneIcon width={20} height={16} fill={"var(--second-color-emphasis)"} />}
	</li>
  );
};