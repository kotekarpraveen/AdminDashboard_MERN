
import { API_CONFIG } from "../API_CONFIG";

import { apiSlice } from "./apiSlice";
const apiWithTag = apiSlice.enhanceEndpoints({addTagTypes: ['User']})
  export const userApi = apiWithTag.injectEndpoints({
   endpoints: (builder) => ({

     /*************# GET USER  API  #*************/
     getUser: builder.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),

     
    }),
  });

  export const {
    useGetUserQuery,
   
  } = userApi;

  