import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IFilters, SortByType} from "@/entities/cars/api/CarsPage.type.ts";

 interface IStateInit{
   filters: IFilters,
   sortBy: SortByType[],
   carsLoading: boolean,
    cars: any[]
}
interface UpdateFilterPayload {
  path: string;
  value: string;
}

const initialState: IStateInit = {
  filters:{
    car:{
      gen:"",
      equipment:"",
      mark:"",
      model:""
    },
    features:{
      drive:"",
      box:"",
      motorVolume:{
        endAt:"",
        startAt:"",
      },
      bodyType:"",
      fuelType:""
    },
    liveTime:{
      endAt:"",
      startAt:"",
    },
    mileage:{
      maxMileage:"",
      minMileage:"",
    },
    price:{
      maxPrice:"",
      minPrice:"",
    },
  },
  sortBy:['Сначала новые'],
  carsLoading: false,
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
      workType:["Монолит"],
        isViewDetails: false,
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
      workType:["Монолит", "Кирпичная кладка","Отделка"],
      isViewDetails: false,

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
      workType:["Монолит", "Кирпичная кладка","Отделка"],
      isViewDetails: false,
    },
    {
      id:4, coordinates:[59.853040, 30.213963],
      selectsOption:[],
      paymentAmount: 3_200,
      paymentType: "за кубометр",
      description:"Требуются бригады от 8 человек. Стабильная работа. Приезжайте на объект все обсудим",
      address:"Ленинский пр 95",
      location:"Санкт-Петербург",
      paidPeriod:"за кубометр",
      title:"Монолит, кирпичная кладка, отделка",
      createdAt:"21.12.2024, 16:00",
      workType:["Монолит"],
      isViewDetails: false,
    },
    {
      id:5,
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
      workType:["Монолит", "Кирпичная кладка","Отделка"],
      isViewDetails: false,
    },
    {
      id:6,
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
      workType:["Монолит", "Кирпичная кладка","Отделка"],
      isViewDetails: false,
    },
    {
      id:7, coordinates:[59.853040, 30.213963],
      selectsOption:[],
      paymentAmount: 3_200,
      paymentType: "за кубометр",
      description:"Требуются бригады от 8 человек. Стабильная работа. Приезжайте на объект все обсудим",
      address:"Ленинский пр 95",
      location:"Санкт-Петербург",
      paidPeriod:"за кубометр",
      title:"Монолит, кирпичная кладка, отделка",
      createdAt:"21.12.2024, 16:00",
      workType:["Монолит"],
      isViewDetails: false,
    },
    {
      id:8,
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
      workType:["Монолит", "Кирпичная кладка","Отделка"],
      isViewDetails: false,
    },
    {
      id:9,
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
      workType:["Монолит", "Кирпичная кладка","Отделка"],
      isViewDetails: false,
    }
  ]
}
const CarsSlice = createSlice({
  name:"CarsSlice",
  initialState,
  reducers:{
    changeLoadStatus: (state, action:PayloadAction<boolean>) => {
      state.carsLoading = action.payload;
    },
    updateFilter: (state, action: PayloadAction<UpdateFilterPayload>) => {
      const { path, value } = action.payload;
      const keys = path.split(".");
      let obj: any = state;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
    },
    changeViewDetails: (state,action:PayloadAction<{id:number}>) => {
      state.cars.filter((car) => car.id === action.payload.id)[0].isViewDetails = true
    }
  }
})

export const {updateFilter,changeViewDetails,changeLoadStatus} = CarsSlice.actions;
export default CarsSlice.reducer

