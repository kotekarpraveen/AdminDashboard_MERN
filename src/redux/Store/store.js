
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from "src/redux/Reducer/Slice/globalSlice"
import {apiSlice} from "src/redux/Reducer/Api/apiSlice";
import {userApi} from "src/redux/Reducer/Api/userApi";

const rootReducer = combineReducers({

    [apiSlice.reducerPath] : apiSlice.reducer,
    [userApi.reducerPath] : userApi.reducer,
    
    global: globalReducer
    
  });
  
  
  
  export const store = configureStore({
    reducer: rootReducer,

    middleware:(getDefault) => getDefault().concat(apiSlice.middleware).concat(userApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

  

  