import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';
import HomeContent from '@/components/HomeContent';
import Personal from '@/app/personal';
import Work from '@/app/work';

const Drawer = createDrawerNavigator();

export default function Sliding() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ marginRight: 16 }}
          >
            <Text style={{ fontSize: 22 }}>☰</Text>
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={HomeContent} />
      <Drawer.Screen name="Personal" component={Personal} />
      <Drawer.Screen name="Work" component={Work} />
    </Drawer.Navigator>
  );
}
