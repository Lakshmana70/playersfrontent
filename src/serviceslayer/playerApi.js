// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const playersApi = createApi({
  reducerPath: 'playersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500' }),
  endpoints: (builder) => ({
    getplayerdetail: builder.query({
      query: () => `/`,
    }),
    
    deleteplayer: builder.mutation({
        query: (id) => ({
          url: `/${id}`,
          method: 'DELETE',
         
        }),

  }),
    editplayer: builder.mutation({
        query: (id) => ({
          url: `/${id}`,
          method: 'PUT',
         
        }),

  }),
    getplayerbyiddetails: builder.query({
        query: (id) => ({
          url: `/${id}`,
         
         
        }),

  }),
})
    
  
})

export const { useGetplayerdetailQuery,useDeleteplayerMutation
      ,useGetplayerbyiddetailsQuery

 } = playersApi