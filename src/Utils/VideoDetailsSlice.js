import { createSlice } from "@reduxjs/toolkit";

const VideoDetailsSlice= createSlice({
    name:"VideoDetails",
    initialState:{
        cast:[],
    },
    reducers:{
        CastUpdate:(state, action)=>{
             state.cast=action.payload; 
        },
       
    }

});

export const {CastUpdate} = VideoDetailsSlice.actions;
export default VideoDetailsSlice.reducer;
