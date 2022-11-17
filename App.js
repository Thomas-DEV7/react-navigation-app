import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Clima from './components/Clima';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: "steelblue"} }}>
      <Stack.Screen name="Tela inicial" component={Home} />
      <Stack.Screen name="Clima" component={Clima} options={({route}) => ({ headerTitle: route.params.cidade})}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

