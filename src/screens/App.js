import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import { Theme, Mapping, FeatherIcons, MaterialIcons } from '../utils';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigator, DashboardNavigator } from '../routes';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...Theme }}
        customMapping={Mapping}>
        <IconRegistry icons={[EvaIconsPack, FeatherIcons, MaterialIcons]} />
        <NavigationContainer>
          <Navigator
            initialRouteName="Auth"
            screenOptions={{ headerShown: false }}>
            <Screen name="Auth" component={AuthNavigator} />
            <Screen name="Dashboard" component={DashboardNavigator} />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

export default App;
