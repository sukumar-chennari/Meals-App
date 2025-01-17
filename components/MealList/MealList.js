import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";


function MealList({items}){
    function renderMeanItem(itemData) {
    
        return (
          <MealItem
          id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            
          />
        );
      }

      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMeanItem}
          />
        </View>
      );
}

export default MealList

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})