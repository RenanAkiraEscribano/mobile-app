import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Principal from "./Principal";
import Metodologias from "./Metodologias";

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#fff"
};

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions} >
            <Tab.Screen
                key={1}
                name={'Principal'}
                component={Principal}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                }}
            />
            <Tab.Screen
                key={2}
                name='Metodologias'
                component={Metodologias}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Feather name='book-open' color={color} size={size} />
                }}
            />

        </Tab.Navigator>
    )
}