import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList,Image} from 'react-native'
import { useSelector} from 'react-redux';
import ButtonsBotton from '../../components/buttonsbotton';
import Avatar2 from '../../components/avatar';

const DatosVendedor = ({ navigation, route })=>{
    const products = useSelector(state => state.products.list)
    const selectedId = useSelector(state =>state.products.selectedId)
    const product = products.find(item => item.id === selectedId);
    const userId = useSelector(state => state.auth.userId);


/* <ButtonLong text={"CHAT CON EL VENDEDOR"} handleSelected={()=>{}}></ButtonLong> */
    return(
        <View style={styles.conteiner}>
             <Image style={styles.photo} source={require('../../assets/images/imgVendedor.jpg')}></Image>
             <Avatar2 title = "Mariano Herrera" alias='mariano_computer' />
             <View style={styles.conteinerText}>
             <Text>Direccion: Brandsen 3435 Ramos Mejia</Text>
             <Text>Tel: 4354-4356</Text>
             <Text>Horarios: 8:30 hs a 17 hs de lunes a viernes </Text>
             </View>
        <ButtonsBotton product={product} userId={userId} ></ButtonsBotton>
        
        </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
       photo:{
        flexGrow:1,
        height:180,
        backgroundColor:"#FB6D01",
       },
       conteinerText:{
           padding:10
       }
})

export default DatosVendedor