import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import CadastroMetodologia from '../pags/CadastroMetodologia';
import RelatorioMetodologias from '../pags/RelatorioMetodologias';
import Principal from '../pags/Principal';
import Login from '../pags/Login';

const App = createNativeStackNavigator();

type RoutesHomeNavigation = {
    Home: undefined;
    Cadastro: undefined;
    Relatorio: undefined;
}

export type RoutesHomeTypes = NativeStackNavigationProp<RoutesHomeNavigation>;

export default function RoutesHome() {
    return (
        <NavigationContainer>
            <App.Navigator initialRouteName='Login' screenOptions={{ headerShown: false}}>
            <App.Screen 
                    name='Home' 
                    component={Principal}
                />
                <App.Screen 
                    name='Cadastro' 
                    component={CadastroMetodologia}
                />
                <App.Screen 
                    name='Relatorio' 
                    component={RelatorioMetodologias}
                />
            </App.Navigator>
        </NavigationContainer>
    )
}