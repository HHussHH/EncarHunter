import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IFilters, SortByType} from "@/entities/cars/api/CarsPage.type.ts";

export interface IFetchCar{
  id: number,
  badge: string,
  price: number,
  fuel_type: string,
  active: boolean,
  model: string,
  brand: string,
  badge_detail: string,
  milleage: number,
  form_year: number,
  "update_at": string,
}
interface StateCars extends IFetchCar {
  isViewDetails:boolean,
  carLoading:boolean,
  imgSrc:string,
}
 interface IStateInit{
   filters: IFilters,
   sortBy: SortByType[],
   carsLoading: boolean,
    cars: StateCars[]
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
  cars: []
}
const CarsSlice = createSlice({
  name:"CarsSlice",
  initialState,
  reducers:{
    changeLoadStatus: (state, action:PayloadAction<{ status:boolean, carId:number }>) => {
      const car = state.cars.find(car => car.id === action.payload.carId);
      if (car) {
        car.carLoading = action.payload.status; // Предполагаем, что у машины есть поле `loading`
      }
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
    setCars: (state, action: PayloadAction<IFetchCar[]>) => {
      state.cars = action.payload.map(car => ({...car,isViewDetails:false,carLoading:false,imgSrc:""}));
    },
    changeCarPhoto: (state, action:PayloadAction<{ src:string, carId:number }>) => {
      const car = state.cars.find(car => car.id === action.payload.carId);
      if (car) {
        car.imgSrc = action.payload.src; // Предполагаем, что у машины есть поле `loading`
      }
    },
    changeViewDetails: (state,action:PayloadAction<{id:number}>) => {
      state.cars.filter((car) => car.id === action.payload.id)[0].isViewDetails = true
    }
  }
})

export const {updateFilter,changeViewDetails,changeCarPhoto,setCars,changeLoadStatus} = CarsSlice.actions;
export default CarsSlice.reducer

