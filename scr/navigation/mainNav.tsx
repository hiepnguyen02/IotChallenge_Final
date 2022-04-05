import  * as React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyTabs from '../navigation/myTabs'
import Login from '../screens/login'
import SignUp from '../screens/signUp'
const Stack = createNativeStackNavigator()
function MainNav (){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Đăng nhập">
                <Stack.Screen name="Đăng nhập" component={Login}/>
                <Stack.Screen name="Đăng kí" component={SignUp} />
                <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainNav