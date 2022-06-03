import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
//import Logbox from '../login/Index';
import Loginpage from '../loginpage';
//import CubeRegister from '../cuberegi/modalindex';
import DrawerContent from '../Drawerview/content'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../Profile/ProfileScreen';
import Notification from '../NotificationScreen/Notification'; 
import Home from '../homeScreen/home';

const Tab = createMaterialBottomTabNavigator(); 

const MainTabScreen = () => {
    return(
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'white' }}
    >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="NotificationScreen"
            component={Notification}
            options={{
                tabBarLabel: 'Notification',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name=" Profile view"
            component={ Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
    );
}
export default MainTabScreen;

// const Appdrawer = () => {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName="Home">
//                 <Drawer.Screen name="Home" component={Logbox} />
//                 <Drawer.Screen name="Login" component={Loginpage} />
//                 <Drawer.Screen name="Registration" component={CubeRegister} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }
// export default Appdrawer;