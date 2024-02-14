import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user",
    initialState:{},
    reducers:{
        addUserData:(state, action)=>{
             return action.payload;
        },
        removeUserData:(state, action)=>{
            return {};
       }
    }
})

export const {addUserData,removeUserData} = UserSlice.actions;
export default UserSlice.reducer;