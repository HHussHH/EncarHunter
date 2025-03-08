import "./CustomSelectorList.scss";
import { FC, Fragment, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { CustomListItem } from "@/shared/ui";

interface ICustomSelectorListProps {
  children: ReactNode;
  title: string;
  options: string[];
  value: string | string[]; // 🔹 Текущее значение
  onChange: (value: string | string[]) => void; // 🔹 Функция обновления
  multi?: boolean;
}

export const CustomSelectorList: FC<ICustomSelectorListProps> = (props) => {

  const {
    children,
    options,
    title,
    value,
    onChange,
    multi = false,
  } = props
  // Локальный стейт для хранения выбранных значений
  const [selected, setSelected] = useState<string | string[]>(value);

  // Обработчик выбора
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
    onChange(selected);
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