// App.js

import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import FancyCard from './src/components/FancyCards';
import {ScrollView} from 'react-native';
import ElevatedCards from './src/components/ElevatedCards';
import Description from './src/components/Description';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnalysisScreen from './src/screens/AnalysisScreen'; // Adjust the import path

const Stack = createStackNavigator();

const App = () => (
  <ScrollView>
    <FancyCard />
    <Description/>
    <HomeScreen />
  </ScrollView>
);

export default App;
