import React, { useContext } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import MyCardsScreen from './MyCardsScreen';
import StatisticsScreen from './StatisticsScreen';
import SettingsScreen from './SettingsScreen';
import { ThemeProvider, ThemeContext } from './ThemeContext';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconSource;
            if (route.name === 'Home') {
              iconSource = require('./assets/home.png');
            } else if (route.name === 'My Cards') {
              iconSource = require('./assets/myCards.png');
            } else if (route.name === 'Statistics') {
              iconSource = require('./assets/statictics.png');
            } else if (route.name === 'Settings') {
              iconSource = require('./assets/settings.png');
            }

            return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarStyle: {
            backgroundColor: theme.colors.card,
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.border,
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="My Cards" 
          component={MyCardsScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Statistics" 
          component={StatisticsScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
