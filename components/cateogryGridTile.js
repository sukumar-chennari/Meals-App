import { Button, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color,onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}
        onPress={onPress}
        >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    margin: 16,
    height: 150,
    borderRadius: 8,
    flex: 1,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    alignItems:'center',
  },
  button: {
    flex: 1,
    
  },
  buttonPressed:{
    opacity:0.8
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:'100%'
  },
  title:{
    fontWeight:'bold',
    textAlign:'center',
    width:'100%'
  }
});
