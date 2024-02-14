import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
     name:"config",
     initialState:{
        isGptToggle: false,
        SearchMovieToggle:false,
      langConfig:{
         langSelect:"English",

         langChange:{
            "English":{
              placeholder:"What would you like to watch?",
              searchBtn:" Search"

            },
            "Hindi":{
             placeholder:"आप क्या देखना चाहेंगे?",
             searchBtn:"खोज"
            },
            "Spanish":{
               placeholder:"¿Qué te gustaría ver?",
               searchBtn:"buscar"

            }
            

         }

        }
     },
     reducers:{
        GptToggler:(state)=>{
         state.isGptToggle= !state.isGptToggle;
        },

        SearchMovieToggler:(state, action)=>{
         state.SearchMovieToggle = action.payload;

        },

        changeLang:(state, action)=>{
         state.langConfig.langSelect = action.payload;

        },
       
     }
}) 

export const {GptToggler,changeLang, SearchMovieToggler} = ConfigSlice.actions;
export default ConfigSlice.reducer; 