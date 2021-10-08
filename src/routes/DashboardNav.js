import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, DashboardScreen } from '../screens';
import { Text, useTheme } from '@ui-kitten/components';
import { Avatar } from 'react-native-elements';
import { Colors } from '../utils/colors';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  const theme = useTheme();

  return (
    <Navigator initialRouteName="DashboardTab">
      <Screen
        name="DashboardTab"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default Navigation;
