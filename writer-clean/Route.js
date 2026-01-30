import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './component/home';
import Settings from './component/settings';
import Personal from './component/personal';
import Work from './component/work';

const Stack = createStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Todo list" component={Home} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Personal" component={Personal} />
                <Stack.Screen name="Work" component={Work} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Route;