import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FiltersTypes, SortByType} from "@/entities/cars/api/CarsPage.type.ts";

 interface IStateInit{
   filters: FiltersTypes[],
   sortBy: SortByType[]
  cars: any[]
}

const initialState: IStateInit = {
  filters:['Год выпуска'],
  sortBy:['Сначала новые'],
  cars: [
      {
        id:1, coordinates:[59.853040, 30.213963],
      selectsOption:[],
      paymentAmount: 3_200,
      paymentType: "за кубометр",
      description:"Требуются бригады от 8 человек. Стабильная работа. Приезжайте на объект все обсудим",
      address:"Ленинский пр 95",
      location:"Санкт-Петербург",
      paidPeriod:"за кубометр",
      title:"Монолит, кирпичная кладка, отделка",
      createdAt:"21.12.2024, 16:00",
      workType:["Монолит"]
    },
    {
      id:2,
      coordinates:[59.853040, 30.213963],
      selectsOption:["Большой объем",'Частые выплаты',"Есть проживание"],
      paymentAmount: 3_100,
      paymentType: "за кубометр",
      description:"Требуются бригады от 8 человек. Стабильная работа. Приезжайте на объект все обсудим",
      address:"Ленинский пр 95",
      location:"Санкт-Петербург",
      paidPeriod:"за кубометр",
      title:"Монолит, кирпичная кладка, отделка",
      createdAt:"21.12.2024, 16:00",
      workType:["Монолит", "Кирпичная кладка","Отделка"]
    },
    {
      id:3,
      coordinates:[59.853040, 30.213963],
      selectsOption:["Большой объем",'Частые выплаты',"Есть проживание"],
      paymentAmount: 3_000,
      paymentType: "за кубометр",
      description:"Требуются бригады от 8 человек. Стабильная работа. Приезжайте на объект все обсудим",
      address:"Ленинский пр 95",
      location:"Санкт-Петербург",
      paidPeriod:"за кубометр",
      title:"Монолит, кирпичная кладка, отделка",
      createdAt:"21.12.2024, 16:00",
      workType:["Монолит", "Кирпичная кладка","Отделка"]
    }
  ]
}
const CarsSlice = createSlice({
  name:"CarsSlice",
  initialState,
  reducers:{
    changeFilters:(state,action:PayloadAction<{value:FiltersTypes | FiltersTypes[]}>) => {
      const {value} = action.payload;
      if(Array.isArray(value)){
        state.filters = [...value];
      }else{
        state.filters = [value];
      }
      if(state.filters.length === 0){
        state.filters = ['Год выпуска']
      }
      if(state.filters.length > 1 && state.filters.includes('Год выпуска')){
        state.filters = state.filters.filter((type) => type !== "Год выпуска")
      }
    },
    changeSortBy:(state,action:PayloadAction<{value:SortByType |SortByType[] }>) => {
      const {value} = action.payload;
      if(Array.isArray(value)){
        state.sortBy = [...value];
      }else{
        state.sortBy = [value];
      }
    },
  }
})

export const {changeFilters,changeSortBy} = CarsSlice.actions;
export default CarsSlice.reducer

