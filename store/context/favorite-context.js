import { createContext, useState } from "react";

export const FavoritesContext=createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
});

export default function FavoritesContextProvider({children}){ //here i think children might be any object 
    const [favoriteMealsIds,setFavoriteMealsIds]=useState([])

    function addFavorite(id){
        setFavoriteMealsIds((currentFavIds)=>[...currentFavIds,id])
    }

    function removeFavorite(id){
        setFavoriteMealsIds((currentFavIds)=>currentFavIds.filter(mealId=>mealId!==id))
    }

    const value={
        ids:favoriteMealsIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }


    return <FavoritesContext.Provider  value={value}>
        {children}
    </FavoritesContext.Provider>
}