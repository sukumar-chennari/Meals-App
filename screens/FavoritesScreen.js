import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList/MealList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";

export default function FavoriteScreen(){
   const favoriteMealsCtx= useContext(FavoritesContext)
   const favoriteMeals=MEALS.filter(meal=>favoriteMealsCtx.ids.includes(meal.id))

   if(favoriteMeals.length===0){
        return <View style={styles.root}>
            <Text style={styles.text}>!!! You have no favorite meals yet !!!</Text>
        </View>
   }
    return <MealList items={favoriteMeals}/>
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center'
    }
})