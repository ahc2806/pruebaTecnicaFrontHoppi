import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, InitialScreen } from '../screens';
import { Text, useTheme } from '@ui-kitten/components';
import { Avatar } from 'react-native-elements';
import { Colors } from '../utils/colors';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  const theme = useTheme();

  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Avatar
              rounded
              overlayContainerStyle={{ backgroundColor: Colors.white }}
              icon={{
                name: 'user',
                type: 'font-awesome',
                color: theme['color-info-default'],
              }}
            />
          ),
          headerStyle: { backgroundColor: theme['color-primary-default'] },
        }}
      />
    </Navigator>
  );
};

export default Navigation;
