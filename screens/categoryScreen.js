import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/cateogryGridTile"




function CategoryScreen({navigation}){
    function renderCateogoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview',{categoryId:itemData.item.id})
        }
      
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}
        onPress={pressHandler} />
    }
    return(
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item)=>item.id}
            renderItem={renderCateogoryItem}
            numColumns={'2'}
        />
    )
}
export default CategoryScreen