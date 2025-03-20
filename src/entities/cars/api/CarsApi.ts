import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFetchCar} from "@/entities/cars/api/CarsSlice.ts";

export const CarsApi = createApi({
  reducerPath:"CarsApi",
  baseQuery: fetchBaseQuery({baseUrl:'https://encarhunter.com/api/'}),
  endpoints: (builder) => ({
	getCarsWithFilters: builder.query<{
	  count:number,
	  result: IFetchCar[],
	},void>({
	  query: () => {
		return{
		  url:"car/by_filter?count=10&step=0",
		  headers:{
			"Content-Type":"application/json"
		  },
		  method:"POST",
		  body:{
			"filter": {
			},
			"order_by": {
			  "update_at":true
			}
		  }
		}
	  }
	}),
	getCarPhotosWithId: builder.query<{main:string, photos:{file:string}[]}, { id: number}>({
	  query: ({id}) => {
		return {
		  url:`car/car_photos?car_id=${id}`,
		  headers: {
			'Content-Type': 'application/json',
		  }
		}
	  }
	}),
  })
})

export const {useLazyGetCarsWithFiltersQuery,useLazyGetCarPhotosWithIdQuery} = CarsApi