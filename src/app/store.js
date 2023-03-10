import movieReducer from "../features/movie/movieSlice";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk"
import userSlice from "../features/user/userSlice";






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




const persistConfig = {
  key: 'movies',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, movieReducer,userSlice)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools:process.env.NODE_ENV !== "production"

})



