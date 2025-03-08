import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  advantagesType,
  ICars,
  locationType,
  workType,
  workTypes
} from "@/entities/cars/api/CarsPage.type.ts";

interface IStateInit{
  profileStatus: "company" | "individual" | null;
  locations: locationType[] | [];
  workTypes: workType[] | [];
  canGetMail: boolean;
}

const initialState: IStateInit = {
  profileStatus:null,
  locations: [],
  workTypes: [],
  canGetMail: false,
}

const ProfileSlice = createSlice({
  name:"ProfileSlice",
  initialState,
  reducers:{
	changeProfileStatus(state, action: PayloadAction<"company" | "individual" | null>){
	  state.profileStatus = action.payload;
	},
	changeProfileLocations:(state,action:PayloadAction<{value:locationType |locationType[] }>) => {
	  const {value} = action.payload;
	  if(Array.isArray(value)){
		state.locations = [...value];
	  }else{
		state.locations = [value];
	  }
	},
	changeWorkTypes:(state,action:PayloadAction<{value:workType | workType[]}>) => {
	  const {value} = action.payload;
	  if(Array.isArray(value)){
		state.workTypes = [...value];
	  }else{
		state.workTypes = [value];
	  }
	  if(state.workTypes.length === workTypes.length - 1){
		state.workTypes = ["Все виды работы"]
	  }
	  if(state.workTypes.find(item => item === "Все виды работы") && state.workTypes.length > 1)
	  {
		state.workTypes = ['Все виды работы']
	  }
	},
	changeGetMail:(state,action: PayloadAction<boolean>) => {
	  state.canGetMail = action.payload;
	}
  }
})

export const {changeWorkTypes,changeProfileLocations,changeGetMail,changeProfileStatus} = ProfileSlice.actions;
export type profileFieldType = keyof IStateInit
export default ProfileSlice.reducer

