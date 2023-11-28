import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import Principal from '../pags/Principal';
import RoutesHome from './RoutesHome';

const App = createBottomTabNavigator();

export default function RoutesTab() {
    return (
        <App.Navigator screenOptions={{ headerShown: false }}>
            <App.Screen
                name='Home'
                component={Principal}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
                    tabBarLabel: 'Início'
                }} />
        </App.Navigator>
    )
}