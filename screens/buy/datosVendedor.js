import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity,FlatList,Image,ScrollView} from 'react-native'
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
        
        <ScrollView style={[styles.conteinerVendedor,styles.blurredView]}>
       
             <Image style={styles.photo}  source={require('../../assets/images/imgVendedor.jpg')}></Image>
             <Avatar2 title = "Mariano Herrera" alias='mariano_computer' />
             <View style={styles.conteinerText}>
             <Text>Direccion: Brandsen 3435 Ramos Mejia</Text>
             <Text>Tel: 4354-4356</Text>
             <Text>Mail:mariano_computer@hotmail.om</Text>
             <Text>Horarios: 8:30 hs a 17 hs de lunes a viernes </Text>
             <Text>Puntuacion:80</Text>
        </View>
        
        </ScrollView>
        
         <ButtonsBotton product={product}  userId={userId} ></ButtonsBotton>
         </View>
    )
}

const styles= StyleSheet.create({
    conteiner:{
        width:"100%",
        height:"100%"
        },
        absolute: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
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