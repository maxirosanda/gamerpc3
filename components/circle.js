import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const Circle = ({item})=>{
    
    return(
        <View>
            <TouchableOpacity > 
                <Image style={styles.circle} source={{uri:item.url}}></Image>
                <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    circle:{
        backgroundColor:"#FB6D01",
        flexGrow:1,
        flexDirection:"row",
        width:100,
        maxWidth:100,
        height:100,
        margin:8,
        borderRadius:50,
        alignContent:"center",
        },
        text:{
            textAlign:"center",
            textAlignVertical:"center",
            marginBottom:8,
        }
})

export default Circle