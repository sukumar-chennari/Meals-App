import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetails from "../mealDetails";

function MealItem({ id,title, imageUrl, duration, complexity, affordability}) {
    const navigation=useNavigation()
    
    const pressHandler=()=>{navigation.navigate('MealDetailScreen',{
        mealId:id
    })
}

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:'ccc'}} onPress={pressHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>

          <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>


        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
  },
  innerContainer:{
    borderRadius:8,
    overflow:'hidden'
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 10,
  },

});
