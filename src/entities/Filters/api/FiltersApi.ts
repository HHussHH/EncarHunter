import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const FiltersApi = createApi({
  reducerPath:"FiltersApi",
  baseQuery:fetchBaseQuery({baseUrl:'https://encarhunter.com/api/'}),
  endpoints: (builder) => ({
		getAllFilters: builder.query<{[key:string]:number},void>({
		  query: () => {
				return	{
				  url:"car/brands",
				  method:"GET",
				  headers:{
					"Content-Type": "application/json",
				  }
				}
		  }
		})
	})
})

export const {useLazyGetAllFiltersQuery,useGetAllFiltersQuery} = FiltersApi