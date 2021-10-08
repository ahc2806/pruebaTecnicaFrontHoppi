import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MessagesScreen,
  NotificationsScreen,
  ProfileScreen,
  AddEventScreen,
} from '../screens';
import { useTheme } from '@ui-kitten/components';
import { Colors } from '../utils/colors';

const theme = useTheme();
const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'cog';
          } else if (route.name === 'AddEvent') {
            iconName = 'calendar-week';
          } else if (route.name === 'Messages') {
            iconName = 'envelope';
          } else if (route.name === 'Notifications') {
            iconName = 'bell';
          }

          return (
            <FontAwesome5
              name={iconName}
              size={size - 3}
              color={color}
              solid={focused}
            />
          );
        },
        tabBarActiveTintColor: theme['color-primary-default'],
        tabBarInactiveTintColor: Colors.gray2,
      })}>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, title: 'Inicio' }}
      />
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, title: 'Perfil' }}
      />
      <Screen
        name="AddEvent"
        component={AddEventScreen}
        options={{ headerShown: false, title: 'Plan' }}
      />
      <Screen
        name="Messages"
        component={MessagesScreen}
        options={{ headerShown: false, title: 'Mensajes' }}
      />
      <Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: false, title: 'Notificaciones' }}
      />
    </Navigator>
  );
}
