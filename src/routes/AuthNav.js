import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddressScreen,
  CreateAccountScreen,
  LoginScreen,
  PersonalInformationScreen,
  RegisteredScreen,
  UserInformationScreen,
  WelcomeScreen,
} from '../screens';
import { Colors } from '../utils/colors';
import { Text } from '@ui-kitten/components';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Navigator headerMode="screen" initialRouteName="Welcome">
      <Screen
        name="Address"
        component={AddressScreen}
        options={{
          title: '',
          headerRight: () => (
            <Text category="s1" style={{ marginRight: 20 }}>
              3/3
            </Text>
          ),
          headerTintColor: Colors.dark,
        }}
      />
      <Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: Colors.white,
        }}
      />
      <Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          headerTintColor: Colors.dark,
        }}
      />
      <Screen
        name="PersonalInformation"
        component={PersonalInformationScreen}
        options={{
          title: '',
          headerRight: () => (
            <Text category="s1" style={{ marginRight: 20 }}>
              2/3
            </Text>
          ),
          headerTintColor: Colors.dark,
        }}
      />
      <Screen
        name="Registered"
        component={RegisteredScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="UserInformation"
        component={UserInformationScreen}
        options={{
          title: '',
          headerRight: () => (
            <Text category="s1" style={{ marginRight: 20 }}>
              1/3
            </Text>
          ),
          headerTintColor: Colors.dark,
        }}
      />
      <Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default Navigation;
