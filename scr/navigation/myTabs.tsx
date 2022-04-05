import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Devices from "../screens/devices";
import Home from "../screens/home";
import Personal from "../screens/person";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Thiết bị"
                component={Devices}
                options={{
                    tabBarLabel: 'Thiết bị',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="feed" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Trang chủ"
                component={Home}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cá nhân"
                component={Personal}
                options={{
                    tabBarLabel: 'Cá nhân',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default MyTabs