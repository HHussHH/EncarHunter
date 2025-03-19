import "./SortSystem.scss";
import {FC, ReactNode} from "react";

interface ISortSystemProps {
  children?: ReactNode
}

export const SortSystem:FC<ISortSystemProps> = () => {
  return (
	<div className="SortSystem">
	  <label className="SortSystem__info">2 322 объявлений</label>
	  <label className="SortSystem__sortBy">
		↕️
		<span> Сортировка:</span>
		<span> сначала новые</span>
	  </label>
	</div>
  );
};

