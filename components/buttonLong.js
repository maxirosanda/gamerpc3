import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const ButtonLong = ({text,handleSelected,color})=>{
    
    return(
        <TouchableOpacity style={[{backgroundColor:color },styles.contendorBotonLargo]} onPress={handleSelected} > 
        <Text style={styles.textBotonLargo}>{text}</Text>
    </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    contendorBotonLargo:{
        width:"90%",
        margin:10,
        height:50,
        borderRadius:5
    },
    textBotonLargo:{
        fontSize:16,
        textAlign:"center",
        color:"#ffffff",
        textAlignVertical:"center",
        height:50,
    },
})

export default ButtonLong