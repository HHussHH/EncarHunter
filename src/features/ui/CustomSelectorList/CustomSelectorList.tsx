import "./CustomSelectorList.scss";
import { FC, Fragment, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { CustomListItem } from "@/shared/ui";
import {useAppDispatch} from "@/shared/api/types/redux.type.ts";
import {updateFilter} from "@/entities/cars/api/CarsSlice.ts";

interface ICustomSelectorListProps {
  children: ReactNode;
  title: string;
  options: string[];
  value: string; // 🔹 Текущее значение
  multi?: boolean;
  path?:string;
}

export const CustomSelectorList: FC<ICustomSelectorListProps> = (props) => {

  const {
    children,
    options,
    title,
    value,
    path,
    multi = false,
  } = props

  const [selected, setSelected] = useState<string | string[]>(value.split(", "));

  const dispatch = useAppDispatch()
  const handleChangeFilter = () => {
    const currentSelected = Array.isArray(selected) ? selected.join(", ") :selected;
    dispatch(updateFilter({path:path!,value:currentSelected}))
  }


  const handleSelect = (opt: string) => {
    if (multi) {
      setSelected((prev) =>
        Array.isArray(prev)
          ? prev.includes(opt)
            ? prev.filter((item) => item !== opt) // Удаляем, если уже выбрано
            : [...prev, opt] // Добавляем, если не выбрано
          : [opt]
      );
    } else {
      setSelected(opt);
    }
  };
  const applySelection = () => {
    handleChangeFilter();
  };

  return createPortal(
    <div className="CustomSelectorList" id="CustomSelectorList">
      <h1 className="CustomSelectorList__title">{title}</h1>
      <ul className="CustomSelectorList__ul">
        {options.map((opt) => (
          <Fragment key={opt}>
            <CustomListItem
              multi={multi}
              value={opt}
              selected={Array.isArray(selected) ? selected.includes(opt) : selected === opt}
              onClick={() => handleSelect(opt)}
            />
          </Fragment>
        ))}
      </ul>

      <div className="CustomSelectorList__btns" onClick={applySelection}>
        {children}
      </div>
    </div>,
    document.body
  );
};