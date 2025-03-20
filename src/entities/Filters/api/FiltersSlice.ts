import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ISetFilters} from "@/entities/cars/api/CarsPage.type.ts";

interface IStateInit{
  filters: ISetFilters,
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
	  mark:[],
	  model:[],
	},
	features:{
	  drive:"",
	  box:"",
	  motorVolume:{
		endAt:"",
		startAt:"",
	  },
	  bodyType:"",
	  fuelType:[]
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
}
const FiltersSlice = createSlice({
  name:"FiltersSlice",
  initialState,
  reducers:{
	setFilter: (state, action: PayloadAction<UpdateFilterPayload>) => {
	  const { path, value } = action.payload;
	  const keys = path.split(".");
	  let obj: any = state;
	  for (let i = 0; i < keys.length - 1; i++) {
		obj = obj[keys[i]];
	  }
	  obj[keys[keys.length - 1]] = value;
	},
	setMark: (state, action: PayloadAction<[string,number][]>) => {
	  state.filters.car.mark = action.payload;
	},
	setFuel: (state, action: PayloadAction<[string,number][]>) => {
	  state.filters.features.fuelType = action.payload;
	},
	setModel: (state, action: PayloadAction<[string,number][]>) => {
	  state.filters.car.model = action.payload;
	}
  }
})

export const {setFuel,setMark,setModel} = FiltersSlice.actions;
export default FiltersSlice.reducer

