import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'
function IconButton( {onPress,icon}){
    return <Pressable onPress={onPress}  style={({pressed})=>pressed?styles.pressed:null}>
        <Ionicons name={icon?icon:'home'} size={24} color={'white'}/>
    </Pressable>
}

export default IconButton

const styles=StyleSheet.create({
    pressed:{
        opacity:0.4
    }
})