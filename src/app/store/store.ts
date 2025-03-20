import {configureStore} from "@reduxjs/toolkit";
import CarsSlice from "@/entities/cars/api/CarsSlice.ts";
import {FiltersApi} from "@/entities/Filters/api/FiltersApi.ts";
import FiltersSlice from "@/entities/Filters/api/FiltersSlice.ts";
import {CarsApi} from "@/entities/cars/api/CarsApi.ts";


export const store = configureStore({
  reducer: {
    [FiltersApi.reducerPath]: FiltersApi.reducer,
    [CarsApi.reducerPath]: CarsApi.reducer,
    cars:CarsSlice,
    filters:FiltersSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(FiltersApi.middleware,CarsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch