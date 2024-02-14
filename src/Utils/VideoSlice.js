import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name:"video",
    initialState:{
        videoList:{
            nowPlaying:null,
        },

        searchVideoList:null,
        
        playingVideo:[],

        randomVideoId: Math.floor((Math.random() * 10) + 1),

        playingVideoID:null ,
    },

    
    reducers:{

       addnowPlaying:(state, action)=>{
          state.videoList.nowPlaying= action.payload; 
       },

       addPlayingVideo:(state,action)=>{
          state.playingVideo=action.payload;
       },

       addRandomVideoId:(state,action)=>{
           state.randomVideoId = Math.floor((Math.random() * state.videoList.nowPlaying.length) + 1);
       },
       AddSearchedVideo:(state,action)=>{
          state.searchVideoList = action.payload;
       },

       addPlayingVideoId:(state,action)=>{
               state.playingVideoID = action.payload; 
             
               
       }
    }

})

export const {addnowPlaying, addPlayingVideo, addRandomVideoId, AddSearchedVideo, addPlayingVideoId} = VideoSlice.actions;
export default VideoSlice.reducer;