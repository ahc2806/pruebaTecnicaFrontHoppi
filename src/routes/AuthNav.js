import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CreateAccountScreen,
  LoginScreen,
  PersonalInformationScreen,
  RegisteredScreen,
  UserInformationScreen,
  WelcomeScreen,
  CreateUserScreen,
} from '../screens';
import { Colors } from '../utils/colors';
import { Text } from '@ui-kitten/components';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Navigator headerMode="screen" initialRouteName="Welcome">
      <Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{
          title: '',
          headerTransparent: true,
          headerShadowVisible: false,
          headerTintColor: Colors.white,
        }}
      />
      <Screen
        name="CreateUser"
        component={CreateUserScreen}
        options={{
          title: '',
          headerShadowVisible: false,
          headerRight: () => (
            <Text category="s1" style={{ marginRight: 20 }}>
              3/3
            </Text>
          ),
          headerTintColor: Colors.dark,
        }}
      />
      <Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          headerTintColor: Colors.dark,
          headerShadowVisible: false,
        }}
      />
      <Screen
        name="PersonalInformation"
        component={PersonalInformationScreen}
        options={{
          title: '',
          headerShadowVisible: false,
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
          headerShadowVisible: false,
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
