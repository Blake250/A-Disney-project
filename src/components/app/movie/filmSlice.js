import { createSlice } from "@reduxjs/toolkit";


const  initialState = {
    movies: []
};

const  filmSlice = createSlice({
    name: "movie",
    initialState ,

    reducers: {
        setMovies : (state, action) =>{
            state.movies = action.payload

        }
    }

})


export const {setMovies} =  filmSlice.actions;
export const selectMovies = (state) =>  state.movies;


export default   filmSlice.reducer;

