// App.js

import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import FancyCard from './src/components/FancyCards';
import {ScrollView} from 'react-native';
import Description from './src/components/Description';


const App = () => (
  <ScrollView>
    <FancyCard />
    <Description/>
    <HomeScreen />
  </ScrollView>
);

export default App;
