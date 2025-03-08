import {configureStore} from "@reduxjs/toolkit";
import CarsSlice from "@/entities/cars/api/CarsSlice.ts";
import ProfileSlice from "@/entities/Profile/api/ProfileSlice.ts";


export const store = configureStore({
  reducer: {
    cars:CarsSlice,
    profile:ProfileSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch