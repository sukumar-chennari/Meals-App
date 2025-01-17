import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/mealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorite-context";



function MealDetailScreen({ route,navigation }) {
  const favoriteMealsCtx=useContext(FavoritesContext)

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => mealId === meal.id);

  const mealIsFavorite=favoriteMealsCtx.ids.includes(mealId)

  const changeFavoriteStatusHandler=()=>{
    if(mealIsFavorite){
      favoriteMealsCtx.removeFavorite(mealId)
    }else{
      favoriteMealsCtx.addFavorite(mealId)
    }
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return <IconButton
        icon={mealIsFavorite?'star':'star-outline'} 
        onPress={changeFavoriteStatusHandler}
        color='white'
        />
      }
    })
  },[navigation,changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}> {selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>

          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>

          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  root:{
    marginBottom:32
  },

  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer:{
    alignItems:'center'
  },
  listContainer: {
    width: "80%",
  },
});
