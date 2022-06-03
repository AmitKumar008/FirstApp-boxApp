import * as React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Front from '../front page/front';
import Logbox from '../login/Index';
import Loginpage from '../loginpage';
import CubeRegister from '../cuberegi/modalindex';
//import MainTabScreen from '../Drawerview/Drawer';
import DrawerAfterLogin from '../../DrawerAfterLogin';
//import Form from '../validation/login';

const Stack = createNativeStackNavigator();

const AppboxNavigation = (props) => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false, }}>

            <Stack.Screen
                name='Front'
                component={Front} />
            <Stack.Screen
                name="Logbox"
                component={Logbox} />

            <Stack.Screen
                name="Loginpage"
                component={Loginpage}
            />
            <Stack.Screen
                name="CubeRegister"
                component={CubeRegister} />

            <Stack.Screen
                name="DrawerAfterLogin"
                component={DrawerAfterLogin} />


        </Stack.Navigator>

    );
}

export default AppboxNavigation;
