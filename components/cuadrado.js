import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const Cuadrado = ({handleSelected,imgCuadrado})=>{
   
    var icon = imgCuadrado
  ? require('../assets/images/imgProgramas.jpg')
  : require('../assets/images/imgGame.jpg');

    return(
        <TouchableOpacity style={styles.cuadrado} onPress={handleSelected}>
           <Image style={styles.img}  source={icon} />
        </TouchableOpacity>

    )
}

const styles= StyleSheet.create({
    cuadrado:{
        flexDirection:"row",
        justifyContent:"center"
    },
    img:{
        width:120,
        height:120,
        margin:20,
        borderRadius:8,
        backgroundColor:"#FB6D01",
        

    }
})

export default Cuadrado