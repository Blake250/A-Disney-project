//import movieReducer from "../features/movie/movieSlicee";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from "redux-thunk"
import filmSlice from './movie/filmSlice';
import userSlice from "../../features/user/userSlice";
//import { combineReducers } from "@reduxjs/toolkit";

 







import {
 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'





const rootReducer = combineReducers( 
{    
  movie : filmSlice,
  user : userSlice



}

 )






const persistConfig = {
key: 'root',
  version: 1,
  storage,
  whitelist: ['user'] 
}

const persistedReducer = persistReducer(persistConfig,rootReducer )

export const store = configureStore({
   
    reducer: persistedReducer,
  middleware: [thunk],
  devTools:process.env.NODE_ENV !== "production"

})



