import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import Metodologia from '../pags/Metodologias';
import RelatorioMetodologias from '../pags/RelatorioMetodologias';
import ItensMetodologias from '../pags/ItensMetodologia';
import Login from '../Login';
import Tabs from '../pags/tabs';
import Principal from '../pags/Principal';
import CadastroUsuario from '../pags/CadastroUsuario'
const App = createNativeStackNavigator();

type RoutesHomeNavigation = {
    Home: undefined;
    Cadastro: undefined;
    Relatorio: undefined;
}

export type RoutesHomeTypes = NativeStackNavigationProp<RoutesHomeNavigation>;

export default function Routes() {
    return (
        <NavigationContainer>
            <App.Navigator >
                <App.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <App.Screen
                    name='Tabs'
                    component={Tabs}
                    options={{ headerShown: false }}
                />
                <App.Screen
                    name='Principal'
                    component={Principal}
                    options={{ headerShown: false }}
                />
                <App.Screen
                    name='Metodologia'
                    component={Metodologia}
                    options={{ headerShown: false }}
                />
                <App.Screen
                    name='RelatorioMetodologias'
                    component={RelatorioMetodologias}
                    options={{ headerShown: false }}
                />
                <App.Screen
                    name='ItensMetodologias'
                    component={ItensMetodologias}
                    options={{ headerShown: false }}
                />
                <App.Screen
                    name='CadastroUsuario'
                    component={CadastroUsuario}
                    options={{ headerShown: false }}
                />
            </App.Navigator>
        </NavigationContainer>
    )
}