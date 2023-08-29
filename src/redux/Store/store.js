
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from "src/redux/Reducer/Slice/globalSlice"

const rootReducer = combineReducers({
    global: globalReducer
    
  });
  
  
  
  export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
  });
  
  //export const persistor = persistStore(store);
  