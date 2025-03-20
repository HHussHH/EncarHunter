import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const FiltersApi = createApi({
  reducerPath:"FiltersApi",
  baseQuery:fetchBaseQuery({baseUrl:'https://encarhunter.com/api/car'}),
  endpoints: (builder) => ({
		getAllFilters: builder.query<{[key:string]:number},void>({
		  query: () => {
				return	{
				  url:"/brands",
				  method:"GET",
				  headers:{
					"Content-Type": "application/json",
				  }
				}
		  }
		}),
	getAllFuel: builder.query<{[key:string]:number},void>({
	  query:() =>{
		return{
		  url:"/fuel_types",
		  method:"GET",
		  headers:{
			"Content-Type": "application/json",
		  }
		}
	  }
	}),
	getAllModules: builder.query<{[key:string]:number},{filters:string[]}>({
	  query:({filters}) =>{
		return{
		  url:"/models",
		  method:"POST",
		  headers:{
			"Content-Type": "application/json",
		  },
		  body:filters[0] === "" ? [] : filters
		}
	  }
	})
	})
})

export const {useLazyGetAllFiltersQuery,useLazyGetAllFuelQuery,useLazyGetAllModulesQuery} = FiltersApi