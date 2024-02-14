import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import VideoSlice from "./VideoSlice";
import ConfigSlice from "./ConfigSlice";
import VideoDetailsSlice from "./VideoDetailsSlice";

export const myStore = configureStore({
    reducer:{
        user:UserSlice,
        video:VideoSlice,
        config:ConfigSlice,
        VideoDetails:VideoDetailsSlice,
    }
})