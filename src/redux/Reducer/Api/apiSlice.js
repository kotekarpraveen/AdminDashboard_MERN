import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
     
        
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

       console.log(result);
    if(result?.error?.status === 401) {
        console.log("401");
       // send refresh token to get new access token 
        if(api.endpoint !== "getLoginApi")
        {
           
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})