import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice=createSlice({
    name:'favorites',
    initialState:{
        ids:[]
    },
    reducers:{ //redures are functions used change our state 
        addFavorite:(state,action)=>{  
            state.ids.push(action.payload.id)
         },//state will automatically will get current snap of our , so we need accept it as parameter
        removeFavorite:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})

export const addFavorite=favoriteSlice.actions.addFavorite
export const removeFavorite=favoriteSlice.actions.removeFavorite
export default favoriteSlice.reducer //this reducer is internal thing