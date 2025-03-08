export const paymentTypes = [
  "В месяц",
  "В неделю",
  "За смену",
  "За час",
  "Сдельная оплата",
  "За м²",
  "за кубометр",
  "За всю работу",
  "Другое"
] as const;
export type paymentType = typeof paymentTypes[number];

export const advantagesTypes = [
  "Есть проживание",
  "Частые выплаты",
  "Большой объем",
  "Возможны авансы",
  "Есть питание"
] as const;

export type advantagesType = typeof advantagesTypes[number];

export const workTypes = [
  "Все виды работы",
  "Кирпичная кладка",
  "Отделка",
  "Монолит",
  "Штукатурка",
  "Гипсокартон"
] as const;

export type workType = typeof workTypes[number];

export const locationTypes = [
  "Санкт-Петербург",
  "Москва и область",
  "Краснодарский край",
  "Владимир",
  "Екатеринбург",
  "Ростов-на-Дону",
  "Владивосток",
  "Нижний Новгород",
  "Казань",
  "Сочи",
  "Грозный",
  "Другое"
] as const;

export type locationType = typeof locationTypes[number];


export const FilterVariables =  ['Марка', 'Модель', 'Производитель','Год выпуска', 'Спортивная','Не выбрано'] as const
export type FiltersTypes = typeof FilterVariables[number];

export const SortBy = ['Сначала новые','Сначала старые','От дорогих к дешевым','От дешевых к дорогим','Не выбрано'] as const;
export type SortByType = typeof SortBy[number];
export  interface ICars{
  id:number;
  title:string,
  paymentType: paymentType,
  paymentAmount:number,
  selectsOption: advantagesType[],
  coordinates: [number, number],
  address: string,
  createdAt: string,
  workType:workType[],
  paidPeriod:paymentType,
  description:string,
  location:locationType
}

