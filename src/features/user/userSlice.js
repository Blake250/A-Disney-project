import {createSlice} from "@reduxjs/toolkit"




const initialState = {

    name: null,
    email: null,
    photo: null,
}



const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setUserLogin : (state, action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;

        },

        setUserLogOut : (state, action)=>{
            state.name = null;
            state.email = null;
            state.photo = null;

        }
    }



     
       


})

export const {setUserLogin, setUserLogOut} = userSlice.actions;






export default userSlice.reducer;