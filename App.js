
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Mongagua from './components/Mongagua';
import Itanhaem from './components/Itanhaem';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mongagua" component={Mongagua} />
        <Stack.Screen name="Itanhaem" component={Itanhaem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
