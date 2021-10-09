import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DatosVendedor from '../screens/buy/datosVendedor';
import GameCompatibility from '../screens/buy/gameCompatibility';
import Recommended from '../screens/buy/recommended';
import {COLORS} from '../constants/colors'

const Tab = createMaterialTopTabNavigator()
const BuyNavigator = () => (

      <Tab.Navigator  tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#c4461c',
        inactiveBackgroundColor: '#b55031',
            style: {
                  backgroundColor: COLORS.primary,
                  paddingBottom: 3
            }
     }}>
        <Tab.Screen name="Recomendadas"options={{ title: 'DATOS TECNICOS'}} component={Recommended} />
        <Tab.Screen name="Vendedor" options={{ title: 'DATOS VENDEDOR'}} component={DatosVendedor} />
        <Tab.Screen name="Compatibilidad" options={{ title: 'JUEGOS COMPATIBLES'}} component={GameCompatibility} />
      </Tab.Navigator>


);

export default BuyNavigator;