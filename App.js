import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './src/screens/AboutScreen';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import SkillsScreen from './src/screens/SkillsScreen';
import ContactScreen from './src/screens/ContactScreen';
import { ThemeProvider } from './src/context/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
          <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About Me' }} />
          <Stack.Screen name="Projects" component={ProjectsScreen} options={{ title: 'Projects' }} />
          <Stack.Screen name="Skills" component={SkillsScreen} options={{ title: 'Skills' }} />
          <Stack.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
