import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { useDispatch} from 'react-redux';
import { confirOrder } from '../store/actions/orders.action';
import ButtonLong from './buttonLong';
import { COLORS } from '../constants/colors';
const ButtonsBotton = ({product,userId})=>{

    const dispatch = useDispatch();

    const handlerAddItemOrder = () => {
        dispatch(confirOrder(product,userId));
      }
      
    return(
        <View>
                <ButtonLong text={"COMPRAR"} handleSelected={handlerAddItemOrder} color={COLORS.primary} ></ButtonLong>  
         
        </View>
    )
}



export default ButtonsBotton