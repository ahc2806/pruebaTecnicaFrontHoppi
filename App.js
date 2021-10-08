import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { Theme, Mapping, FeatherIcons, MaterialIcons } from './src/utils';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigator, DashboardNavigator } from './src/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenAsync = async () => await AsyncStorage.getItem('token');
    setToken(tokenAsync());
  }, []);

  return (
    <SafeAreaProvider>
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...Theme }}
        customMapping={Mapping}>
        <IconRegistry icons={[EvaIconsPack, FeatherIcons, MaterialIcons]} />
        <NavigationContainer>
          <Navigator
            initialRouteName={token !== null ? 'Dashboard' : 'Auth'}
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
